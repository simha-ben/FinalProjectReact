import React, { useEffect, useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import { Tab } from 'bootstrap'
import Search from './Search.component';
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import ProgramService from '../services/Program.service';

function mapStateToProps(state) {
    return {
        kategories: state.ProgramReducer.optionSetValues["Type"],
        migdar: state.ProgramReducer.optionSetValues["Migdar"],
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(function Home(props) {
    
     let {kategories,migdar}=props;
    //  let {migdar}=props.migdar;
    return (
        <>
            <Search></Search>
            <h2>מיין תוצאות לפי:</h2>
            <div className="border rounded" >
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="קטגוריות">
                        <div>                                                         
                              { kategories && kategories.map((v,i)=>(
                                 <Button>{v}</Button>
                            ))
                            }</div>
                    </Tab>
                    <Tab eventKey="profile" title="מגדר">
                    <div>                                                         
                              { migdar && migdar.map((v,i)=>(
                                 <Button>{v}</Button>
                            ))
                            }</div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );

})