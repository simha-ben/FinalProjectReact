import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap'
import NewMessage from './NewMessage.component';
import { BsHeart } from 'react-icons/bs'
import '../style/ShowProgram.css'
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux'

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
        const [favorite, setFavorite] = useState(false);
        const [favoriteList, setFavoriteList] = useState(JSON.parse(localStorage.getItem('favorite')) || [])//(JSON.parse(localStorage.getItem('favorite')));

        const location = useLocation();
        const { id } = location.state;
        console.log(id); // output: "the-page-id"

        useEffect(() => {
            let p = programList.find((p) => p.id == id);
            setP(p);
            let index = localStorage.getItem('favorite').indexOf(program.id);
            if (index > 0) {
                setFavorite(true);
            }

        }, [props.program]);

        function like() {
            if (favorite) {
                let arr = null//favoriteList[favoriteList.length]=program.id            
                setFavoriteList(arr)
                localStorage.setItem("favorite", JSON.stringify(arr));
                // localStorage.setItem('favorite', null);
            }
            else {
                setFavoriteList(program.id)
                localStorage.setItem("favorite", JSON.stringify(favoriteList));
                // localStorage.setItem('favorite', program.id);
            }
            setFavorite(!favorite)
        }

        return (
            <>
                <Card className="text-center">
                    <Card.Header>{program.title}</Card.Header>
                    <Card.Img variant="top"style={{height:'20rem',width:'30rem'}} src={"http://localhost:63312/"+ program.img}/>
                    <Card.Body>
                        <Card.Title>{program.programerName}</Card.Title>
                        <Card.Text>
                             <br/>
                            {program.description} <br/>
                            {program.age} <br/>
                            {program.language} <br/>
                            {program.price} <br/>
                            {program.publishDate} <br/>
                            {program.subject} <br/>
                            {program.sumOfParticipants} <br/>
                        </Card.Text>
                        <Button variant="primary" onClick={() => { setTO(program.programer); setToName(program.programerName); setnewM(!newM) }}>צור קשר</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
                <div > {newM && <NewMessage to={TO} toName={toName} />}</div>
                
            </>
        )
    })
/**
 * age: "נוער"
description: "הקרנה סוחפת על העבר"
id: 1003
img: "pashut.jpg"
language: "עברית"
migdar: "בנות"
price: 3000
programer: 102
programerName: "ר אליאס"
publishDate: "2018-01-01T00:00:00"
subject: "11"
sumOfParticipants: "500+"
title: "לא פשוט"
type: "הקרנות"
 */