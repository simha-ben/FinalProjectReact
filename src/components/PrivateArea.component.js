import React, { useState, useEffect } from 'react';
import ProgramService from '../services/Program.service';
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import UserService from '../services/User.service';
import MessageService from '../services/Message.service';
import ShowMessage from './ShowMessage.componnent'
import { Link } from 'react-router-dom';
import NewMessage from './NewMessage.component';
import { useNavigate, } from 'react-router-dom'
import DisConnectedAlert from './DisConnectedAlert';


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
    const [Messages, setMeaasges] = useState([]);
    const [userName, setUserName] = useState(" ");
    let { id } = props;
    const [createNew, setCreateNew] = useState(false);
    useEffect(
        async () => {
            if (id) {
                let name = await UserService.getNameById(id);

                setUserName(name);
            }
        }, []
    )
    if (!id) {
        return (
            <DisConnectedAlert></DisConnectedAlert>
        )
    }

    async function getAcceptedMeaasges() {
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
    function createNewMessage() {
        setCreateNew(!createNew)
    }

    return (
        <>
            <h3>hello {userName} :)</h3>
            <Button variant="primary" onClick={getSentdMeaasges}>נשלח</Button>{"   "}
            <Button variant="primary" onClick={getAcceptedMeaasges}>התקבל</Button>{"    "}
            <Button variant="primary" >הניבחרים שלי יוצג בצד תמיד</Button>{"    "}
            <Button variant="primary" onClick={createNewMessage}> אולי לבטל הודעה חדשה</Button>
            {
                createNew && <NewMessage from={id} />
            }
            {
                Messages && Messages.map((m) =>
                    <ShowMessage message={m}></ShowMessage>
                )
            }
        </>
    );
})