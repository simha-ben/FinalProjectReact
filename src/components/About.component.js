// import React, { useState } from 'react';
// import UserService from '../services/User.service';
// export default function About() {
//     const [get, setGet] = useState(null);
//     
//     setGet(UserService.getAll());

//     return (
//         <>
//             <h1>About</h1>
//             {get}

//         </>
//     );
// }

import React, { useState, useEffect } from 'react';
import Fidbek from './Fidbek.component';
import axios from 'axios';
import UserService from '../services/User.service';
export default function About() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [tasks, setTasks] = useState([]);

    // useEffect(() => {
    //     async function service() {
    //         
    //         let t = await UserService.getAll()
    //         setTasks(t);
    //     }
    //     service()
    // }, [])
    return (
        <div style={{minHeight:'73vh'}}>
            <h2><span style={{color:'rgb(41, 151, 161)'}}>EASY PLAN </span>  הוא הפתרון החדש והמשתלם לעולם התוכניות </h2>
            <p style={{fontSize:'20px'}}> מהיום תוכלו בקלות בנוחות ובמהירות לאתר את התוכנית או ההרצאה המתאימה ביותר לארוע שלכם

                ולברר דרך האתר את כל הפרטים הדרושים אודות התוכנית המבוקשת
                <br></br>

                האתר כמובן פעיל 24 שעות ביממה ובכל שעה שתרצו תוכלו לקבל את המידע

                גם בשעות הקטנות של הלילה
                <br></br>
                <br></br>
                בעזרת מנוע חיפוש רב עוצמה תוכלו בקלות לאתר את התוכנית שמתאימה בדיוק לארוע שלכם
                <br></br>
                תוכלו לחפש כאן בעזרת הפילטר המשוכלל ולמקד את החיפוש  לפי קהל יעד גיל הקהל נושא התוכנית מגדר או כל מילת חיפוש שתעלה בדעתכם
                <br></br>
                בדף תוצאות החיפוש תגלו את כל התוכניות שמתאיתות לחיפוש שלכם
                <br></br>
                <br></br>
                ובלחיצה על כל מוצר תדיעו לדף התוכנית בו יוצגו בפניכם כל  פרטי התוכנית
                <br></br>
                ומכל תוכנית תוכלו בצורה נוחה וקלה לשלוח הודעה למפיק התוכנית
                <br></br>
                ולראות את התשובה באזור האישי שלכם

            </p>
            <div className='swiperDiv'>
            <Fidbek></Fidbek>
            </div>
        </div>
    )
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }
    // else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // }
    // else {
    //     return (
    //         <h1>{tasks}</h1>)
    // }
}