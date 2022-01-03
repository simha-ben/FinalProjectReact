import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import NewMessage from './NewMessage.component';


export default function ShowProgram(props) {
    const [program] = useState(props.program);
    const [newM, setnewM] = useState(false);
    const [TO, setTO] = useState(0);
    const [toName, setToName] = useState('');
    return (
        <>
        <Card style={{ margin: '5px' }}>
            {/* <Card.Img variant="top" src={val} style={{ width: '18rem', height: '10rem' }} /> */}
            <Card.Body>
                <Card.Title>{program.title}</Card.Title>
                <Card.Text>
                    {program.programerName}
                    <br />
                    {program.description}
                </Card.Text>
                <Button variant="primary" onClick={() => { setTO(program.programer); setToName(program.programerName); setnewM(!newM) }}>צור קשר</Button>
            </Card.Body>
        </Card>
        <div className='col-6'> {newM &&<NewMessage to={TO} toName={toName}/>}</div>
        </>
    )
}