// import React, { useState } from 'react';
// import UserService from '../services/User.service';
// export default function About() {
//     const [get, setGet] = useState(null);
//     debugger
//     setGet(UserService.getAll());

//     return (
//         <>
//             <h1>About</h1>
//             {get}

//         </>
//     );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserService from '../services/User.service';
export default function About() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [tasks, setTasks] = useState([]);


    
    useEffect(() => {
       // let t=await UserService.getAll()
        // debugger
        async  function service() {
        debugger
        let t=await UserService.getAll()
        setTasks(t);
    }
        service() 
        //setTasks()

// fetch("http://localhost:65509/api/user")
//           //  .then(res => res.text())

//             .then(
//                 (result) => {
//                     setTasks(result.data);
//                 },
//                 (error) => {
//                     setError(error);
//                 }
//             )
        // axios.get(`http://localhost:65509/api/user`)
        //     .then(
        //         (result) => {
        //             setIsLoaded(true);
        //             setTasks(result.data);
        //         },
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         }
        //     )

    }, [])
    return (
        <>
            <h1>About</h1>
            <h1>{tasks}</h1>
            {!tasks && <h1>1</h1>}
            {tasks && <h1>{tasks}</h1>}
            {/* <button onClick={service1}>click</button> */}


        </>
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