import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap'
import NewMessage from './NewMessage.component';
import { BsHeart } from 'react-icons/bs'
import '../style/programDetails.css'
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux'
import { BsPersonFill,BsFillPeopleFill ,BsCalendar2Date} from "react-icons/bs";
import { BiMessageRoundedDetail ,BiShekel} from "react-icons/bi";
import{MdOutlineDescription}from 'react-icons/md'
import {GiAges} from 'react-icons/gi';
import {MdModeStandby} from 'react-icons/md'


function mapStateToProps(state) {
    return {
        programList: state.ProgramReducer.programs
    };
}
function mapDispatchToProps(dispatch) {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)

    (function ProgramDetailes(props) {
        const [program, setP] = useState({});
        const [programList, setprogramList] = useState([...props.programList]);
        const [newM, setnewM] = useState(false);
        const [TO, setTO] = useState(0);
        const [toName, setToName] = useState('');
        const location = useLocation();
        const { id } = location.state;

        useEffect(() => {
            let p = programList.find((p) => p.id == id);
            setP(p);

        }, [props.program]);

        return (
            <>
            <div class="row d-flex justify-content-center">
                <Card className="text-center col-6">
                    <Card.Header>{program.title}</Card.Header>
                    <Card.Img variant="top"
                    class="center"
                     src={"http://localhost:63312/"+ program.img}/>
                    <Card.Body>
                        <Card.Title> מאת: {program.programerName} <BsPersonFill/></Card.Title>
                        <Card.Text>
                             <br/><MdOutlineDescription/>     {program.description} <br/>
                            <GiAges/> מיועד עבור:  {program.age} <br/>
                         <BiMessageRoundedDetail/>  שפה: {program.language} <br/>
                         <BsCalendar2Date/>  נמצא אצלנו מ:   {program.publishDate &&new Date (program.publishDate).toLocaleDateString()}<br/>
                           <MdModeStandby/> {program.subject} <br/>
                         <BsFillPeopleFill/>  כמות משתתפים:  {program.sumOfParticipants} <br/>
                        </Card.Text>
                        <Button variant="primary" onClick={() =>
                             { setTO(program.programer);
                              setToName(program.programerName);
                             setnewM(!newM) }}>צור קשר</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"><BiShekel/>  {program.price}</Card.Footer>
                </Card>
                </div>
                <br></br>
                <div > {newM && <NewMessage to={TO} toName={toName} />}</div>
                
            </>
        )
    })