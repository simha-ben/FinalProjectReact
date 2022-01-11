import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap'
import { useNavigate ,Link} from 'react-router-dom'
// import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs'
import '../style/ShowProgram.css'
export default function ShowProgram(props) {
    const [program, setP] = useState(props.program);
    const [favorite, setFavorite] = useState(false);
    const [favoriteList, setFavoriteList] = useState(JSON.parse(localStorage.getItem('favorite')) || [])//(JSON.parse(localStorage.getItem('favorite')));
    const nevigate=useNavigate();

    useEffect(() => {
        setP(props.program);
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
        <div id='showProgram'>
            <Card  style={{ margin: '5px' }}>
                <Card.Img variant="top" src={'http://localhost:63312/' + program.img} style={{ width: '100%', height: '12rem' }} />
                <Card.Body>
                    <Card.Title>{program.title}</Card.Title>
                    <Card.Text>
                        {program.programerName}
                        <br />
                        {program.description}
                    </Card.Text>
                    <Button variant="primary">
                    <Link to="/programDetailes/" state={{id: program.id}} style={{color:'white'}}>
                        לפרטים נוספים</Link></Button>
                    <br></br>
                    <BsHeart
                        name={favorite ? 'heart' : 'heart-o'}
                        color={favorite ? '#F44336' : 'rgb(50, 50, 50)'}
                        size={30}
                        style={{ marginBottom: 10, marginTop: 20 }}
                        onClick={like}></BsHeart>
                    <Card.Text >
                        {favorite ? 'Remove from favorite' : 'Add to favorite'}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}