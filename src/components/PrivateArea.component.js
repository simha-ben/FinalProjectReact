import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import UserService from '../services/User.service';
import MessageService from '../services/Message.service';
import ShowMessage from './ShowMessage.componnent'
import { TiArrowForward, TiArrowBack, TiHeartFullOutline } from 'react-icons/ti'
import { FaSignOutAlt } from 'react-icons/fa'
import DisConnectedAlert from './DisConnectedAlert';
import LogInComponent from './LogIn.component';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import "../style/sideBar.css"
import ShowProgram from './ShowProgram.component';
import { CgLogOut } from 'react-icons/cg';
import { actions } from '../redux/Action';

function mapDispatchToProps(dispatch) {
    return {
        signOut: (i) => dispatch(actions.signOut(i)),
    };
}
function mapStateToProps(state) {
    return {
        id: state.UserReducer.id,
        programs: state.ProgramReducer.programs,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(function PrivateArea(props) {
    const [Messages, setMeaasges] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const [userName, setUserName] = useState(" ");
    const [inColor, setIn] = useState('white');
    const [outColor, setOut] = useState('white');
    const [loveColor, setLove] = useState('white');
    let { id, programs } = props;
    const [createNew, setCreateNew] = useState(false);
    useEffect(
        async () => {
            if (id) {
                let name = await UserService.getNameById(id);
                setUserName(name);
                getFavorites();
            }
           
        }, [props.programs,props.id]
    )
    if (!id) {
        return (
            <LogInComponent></LogInComponent>
        )
    }

    async function getAcceptedMeaasges() {
        setIn('#e7eeed')
        setOut('white')
        setLove('white')
        try {

            let p = await MessageService.getMessages('accepted', id);

            setMeaasges(p);
            // alert(acceptedMessage)
            console.log(p);
        }
        catch (err) {
            console.log(err);
        }
    }
    async function getSentdMeaasges() {
        setOut('#e7eeed')
        setIn('white')
        setLove('white')

        try {

            let p = await MessageService.getMessages('sent', id);

            setMeaasges(p);
            // alert(acceptedMessage)
            console.log(p);
        }
        catch (err) {
            console.log(err);
        }
    }

    function getFavorites() {
        
        setLove('#e7eeed')
        setIn('white')
        setOut('white')
        let arr = JSON.parse(localStorage.getItem('favorite')) || [];
        if (arr && programs) {

            let fav = programs.filter((item) => {
                let bol = false
                arr.forEach(element => {
                    if (!bol) { bol = (item.id == element) }
                });
                return bol
            })
            setFavorite(fav)
        }

    }
    function signout() {
        props.signOut(null);
    }

    return (
        <div style={{ minHeight: '73vh' }}>
            <h3>שלום {userName} :)</h3>
            <Tab.Container id="left-tabs-example" defaultActiveKey="love" >
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills " className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first" variant="secondary" onClick={getAcceptedMeaasges}
                                    style={{
                                        border: 'rgb(41, 151, 161) solid  1px',
                                        backgroundColor: inColor,
                                        color: "red",
                                        marginBottom: '5px'
                                    }}>
                                    <TiArrowBack style={{ fontSize: '30' }} />  דואר נכנס</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="second" variant="secondary" onClick={getSentdMeaasges}
                                    style={{ border: 'rgb(41, 151, 161) solid  1px', backgroundColor: outColor, color: 'red' }}>
                                    <TiArrowForward style={{ fontSize: '30' }} />   דואר יוצא
                                </Nav.Link>

                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="love" variant="secondary" onClick={getFavorites}
                                    style={{
                                        border: 'rgb(41, 151, 161) solid  1px',
                                        backgroundColor: loveColor,
                                        color: "red",
                                        marginTop: '5px'
                                    }}>
                                    <TiHeartFullOutline style={{ fontSize: '30' }} />  התוכניות שאהבתי</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={signout} style={{
                                    border: 'rgb(41, 151, 161) solid  1px',
                                    backgroundColor: 'white',
                                    color: "red",
                                    marginTop: '5px'
                                }}>
                                    <FaSignOutAlt style={{ fontSize: '25' }} />    יציאה
                                </Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content  >
                            <Tab.Pane eventKey="first">
                                {
                                    Messages && Messages.map((m) =>
                                        <ShowMessage message={m}></ShowMessage>
                                    )
                                }

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {
                                    Messages && Messages.map((m) =>
                                        <ShowMessage message={m}></ShowMessage>
                                    )
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="love">
                                {
                                    favorite.length > 0 ? favorite.map((m) =>
                                        <ShowProgram program={m}></ShowProgram>)
                                        : <h3 style={{ justifyContent: 'center', marginTop: '10vh' }}> אין לך תוכניות שמורות...</h3>
                                }
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>
    );
})