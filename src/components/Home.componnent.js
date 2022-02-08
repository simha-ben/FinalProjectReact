import '../style/Home.css';
import React, { useEffect, useRef, useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import { Tab } from 'bootstrap'
import { connect } from 'react-redux'
import { Button, InputGroup } from 'react-bootstrap'
import MySwiper from './Swiper.component';
import { Link, useNavigate } from 'react-router-dom'
import Counter from './Counter.component';
import { MDBBtn } from 'mdb-react-ui-kit';
import SearchComponent from './Search.component';
import home from '../images/home6.png';
import aaa from '../images/aaa.png';

function mapStateToProps(state) {
    return {
        kategories: state.ProgramReducer.optionSetValues["Type"],
        migdar: state.ProgramReducer.optionSetValues["Migdar"],
        programs: state.ProgramReducer.programs,
    };
}

export default connect(mapStateToProps)(function Home(props) {
    let { kategories, migdar, programs } = props;
    let wordToSearch = useRef('')
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [sumOfPrograms, setSumP] = useState(programs.length);

    function searchMe() {
        setSearch(wordToSearch.current.value);
    }
    // useEffect(
    //     () => {
    //         setSumP(programs.length)
    //     }, [props]
    // )
    return (
        <div>
            <div style={{ color: 'white', minHeight: '73vh', backgroundImage: `url(${home})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} dir='rtl' >
                <form onSubmit={searchMe}>
                    <div>
                        <label >
                            <h3>מה אתה מחפש?</h3>
                            <h5>הדרך הקלה והמהירה ביותר לאיתור תוכנית הרצאה או הפעלה לארוע שלך ,<br></br>מתוך מאגר הסרטים,המצגות, ההרצאות,ההפעלות וההופעות</h5>
                            <br />
                            {/* <MDBInput label="Example label" outline size="lg" /> */}
                            <label class="field field_v1">
                                <input class="field__input" placeholder="לדוג' תפילה" ref={wordToSearch}
                                    onChange={() => {
                                        setSearch(wordToSearch.current.value)
                                    }} />
                                <span class="field__label-wrap">
                                    <span class="field__label">אני מחפש...</span>
                                </span>
                            </label>
                        </label>
                        <br />
                        <br />
                        <Button onClick={searchMe} style={{ color: 'red', borderColor: 'red' }} variant="outline-light" >
                            <Link to="/search" state={{ fromHome: search }} style={{ color: 'red' }} >
                                מצא אותי
                            </Link>
                        </Button>
                    </div>

                </form>

            </div>
            <div style={{ width: '90vw'  }} >
                {/* <div style={{display:"flex"}}> */}
                    <h2 style={{ fontFamily: 'Ariel !important' }}>מיין תוצאות לפי:</h2>
                    <div className="border rounded" >
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="חיפוש לפי נושא">
                                <div>
                                    {kategories && kategories.map((v, i) => (
                                        <Button className='homeButton' style={{ backgroundColor: '#fff', borderColor: 'rgb(41, 151, 161)', margin: '3px' }}>
                                            <Link to="/allProduct" state={{ fromHome: { key: 'type', value: [{ value: v, label: v }] } }} style={{ color: 'red' }}>
                                                {v}</Link>
                                        </Button>
                                    ))
                                    }
                                </div>
                            </Tab>
                            <Tab eventKey="profile" id='tab' title="חיפוש לפי שכבת גיל">
                                <div>
                                    {migdar && migdar.map((v, i) => (
                                        <Button variant="primary" className='homeButton' style={{ backgroundColor: '#fff', borderColor: 'rgb(41, 151, 161)', margin: '3px' }}>
                                            <Link to="/allProduct" state={{ fromHome: { key: 'migdar', value: [{ value: v, label: v }] } }} style={{ color: 'red' }}>
                                                {v}</Link>
                                        </Button>
                                    ))
                                    }</div>
                            </Tab>
                        </Tabs>
                    {/* </div > */}
                </div>
            </div>
            <div>
                <br></br>
                <h3>החדשים שלנו</h3>
                <MySwiper></MySwiper>
            </div>
            <div>  כמות התוכניות שלנווווו
                <Counter max={sumOfPrograms}></Counter>
            </div>
        </div>
    );

})