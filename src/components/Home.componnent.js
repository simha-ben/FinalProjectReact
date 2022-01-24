import '../style/Home.css';
import React, { useEffect, useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import { Tab } from 'bootstrap'
import Search from './Search.component';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import ShowProgram from './ShowProgram.component';
import MySwiper from './Swiper.component';
import { Link } from 'react-router-dom'



function mapStateToProps(state) {
    return {
        kategories: state.ProgramReducer.optionSetValues["Type"],
        migdar: state.ProgramReducer.optionSetValues["Migdar"],
        programs: state.ProgramReducer.programs,
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(function Home(props) {

    let { kategories, migdar, programs } = props;
    const [programsList, setProgramList] = useState([]);
    const [flag, setFlag] = useState(false);

    function filterProgram(value, type) {


        let t = programs.filter((item) => item[type] == value)
        if (t) {
            setProgramList(t)
            setFlag(true)
        }



    }


    return (
        <>
            <Search></Search>
            <h2>מיין תוצאות לפי:</h2>
            <Button onClick={() => filterProgram('', 'type')} >ניקוי בחירה</Button>
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
            {
                flag && <div style={{ 'margin-bottom': '30vh' }}>
                    {programsList.map(item => <ShowProgram program={item}></ShowProgram>)}
                </div>
            }
            <div>
                <MySwiper></MySwiper>
            </div>
        </>
    );

})