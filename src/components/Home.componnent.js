import React, { useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import { Tab } from 'bootstrap'
import Search from './Search.component';
import {connect} from 'react-redux'
import { Card, Button } from 'react-bootstrap'



function mapStateToProps(state) {
    return {
        kategories: state.ProgramReducer.kategories,
    };
}
function mapDispatchToProps(dispatch) {

    return {
        // addProductToCart: (i) => dispatch(actions.addProductToCart(i)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)
    (function Home(props){ 
        let {kategories}=props
        return (
            <>
                <Search></Search>
                <h2>מיין תוצאות לפי:</h2>
                <div className="border rounded" >
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="קטגוריות">
                            {
                                kategories&&kategories.map((v,i)=>{
                                    <Button>yyy{v}</Button>
                                })
                            }
                        </Tab>
                        <Tab eventKey="profile" title="מגדר">
                            <span>hdoniuymhi</span>
                        </Tab>
                    </Tabs>
                </div>
            </>
        );

})