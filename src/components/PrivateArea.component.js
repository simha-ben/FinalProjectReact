import React, { useState, useEffect } from 'react';
import ProgramService from '../services/Program.service';
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import UserService from '../services/User.service';
import MessageService from '../services/Message.service';
import ShowMessage from './ShowMessage.componnent'
import { Link } from 'react-router-dom';
import NewMessage from './NewMessage.component';

function mapStateToProps(state) {
    return {
        id: state.UserReducer.id,
    };
}
function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(function PrivateArea(props) {
    // const [sentMessage, setSentMeaasge] = useState([]);
    const [Messages, setMeaasges] = useState([]);
    const [userName, setUserName] = useState(" ");
    let { id } = props;
    const [createNew,setCreateNew]=useState(false);
    useEffect(
        async () => {
            if (id) {
                let name = await UserService.getNameById(id);
                debugger;
                setUserName(name);
            }
        }, []
    )
    if (!id) {
        return (
            < div>
                <div className="alert alert-danger alert-dismissible">
                    אווופס עדיין לא נכנסת למערכת
                    <Link to="/Login" className="close" data-dismiss="alert" aria-label="close">&times;להתחברות/הרשמה לחץ כאן</Link>
                    <strong></strong>

                </div>
            </div>
        )
    }

    async function getAcceptedMeaasges() {
        try {
            debugger;
            let p = await MessageService.getMessages('accepted', id);
            debugger;
            setMeaasges(p);
            // alert(acceptedMessage)
            console.log(p);
        }
        catch (err) {
            console.log(err);
        }
    }
    async function getSentdMeaasges() {
        try {
            debugger;
            let p = await MessageService.getMessages('sent', id);
            debugger;
            setMeaasges(p);
            // alert(acceptedMessage)
            console.log(p);
        }
        catch (err) {
            console.log(err);
        }
    }
   function createNewMessage(){
    setCreateNew(!createNew)
   }

    return (
        <>
            <h3>hello {userName} :)</h3>
            <Button variant="primary" onClick={getSentdMeaasges}>sent</Button>{"   "}
            <Button variant="primary" onClick={getAcceptedMeaasges}>accepted</Button>{"    "}
            <Button variant="primary" onClick={createNewMessage}>new message</Button>
            {
                createNew &&<NewMessage from={id}/>                    
            }
            {
                Messages && Messages.map((m) =>
                    <ShowMessage message={m}></ShowMessage>
                )
            }
        </>
    );
})