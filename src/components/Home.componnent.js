import '../style/Home.css';
import React, { useEffect, useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import { Tab } from 'bootstrap'
import Search from './Search.component';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import MySwiper from './Swiper.component';
import { Link } from 'react-router-dom'
import Counter from './Counter.component';
// import Counter from './CounterAnimation';

function mapStateToProps(state) {
    return {
        kategories: state.ProgramReducer.optionSetValues["Type"],
        migdar: state.ProgramReducer.optionSetValues["Migdar"],
       // programs: state.ProgramReducer.programs,
    };
}

export default connect(mapStateToProps)(function Home(props) {

    let { kategories, migdar, programs } = props;
 
    return (
        <>
            <Search></Search>
            <h2>מיין תוצאות לפי:</h2>
              <div className="border rounded" >
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="חיפוש לפי נושא">
                        <div>
                            {kategories && kategories.map((v, i) => (
                                <Button variant="primary">
                                    <Link to="/allProduct" state={{ fromHome: { key: 'type', value: [{ value: v, label: v }] } }} style={{ color: 'white' }}>
                                        {v}</Link>
                                </Button>
                            ))
                            }
                        </div>
                    </Tab>
                    <Tab eventKey="profile" id='tab' title="חיפוש לפי שכבת גיל">
                        <div>
                            {migdar && migdar.map((v, i) => (
                                <Button variant="primary">
                                <Link to="/allProduct" state={{ fromHome: { key: 'migdar', value: [{ value: v, label: v }] } }} style={{ color: 'white' }}>
                                    {v}</Link>
                            </Button>
                            ))
                            }</div>
                    </Tab>
                </Tabs>
            </div >
            <div>
                <br></br>
                <h3>החדשים שלנו</h3>
                <MySwiper></MySwiper>
            </div>
            <div>
                כמות התוכניות שלנווווו
      
      <Counter max={programs?.length?programs.length:54}></Counter>
            </div>
        </>
    );

})