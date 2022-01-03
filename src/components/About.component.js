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

    // useEffect(() => {
    //     async function service() {
    //         debugger
    //         let t = await UserService.getAll()
    //         setTasks(t);
    //     }
    //     service()
    // }, [])
    return (
        <>
            <h1>About</h1>
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