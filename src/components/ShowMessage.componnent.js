// import '../style/ShowMessage.scss'
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import NewMessage from './NewMessage.component';

export default function ShowMessage(props) {
    const [message] = useState(props.message);
    const [sendNew, setSendNew] = useState(false)
    function sendNewMessage() {
        setSendNew(!sendNew)
    }
    return (
        message && <Card id='cadr' style={{ margin: '5px' }}>
            <Card.Header> מאת: {message.fromUserName}<br/>
            אל:{message.toUserName}
                <Card.Subtitle className="mb-2 text-muted">{message.date}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Title>{message.title}</Card.Title>
                <Card.Text>{message.content}</Card.Text>
                <Button variant="primary" onClick={sendNewMessage}> תשובה</Button>
                {
                    sendNew && <NewMessage from={message.fromUser} to={message.toUser}/>
                }
            </Card.Body>
        </Card>

    );
}