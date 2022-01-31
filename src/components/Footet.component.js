import React, { useState, useEffect } from 'react';
import '../style/Footer.css'

export default function Footer() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [tasks, setTasks] = useState([]);

    return (
        <>
        {/* <div style={{
            display: 'block',
            padding: '20px',
            height: '60px',
            width: '100%',
          
        }}> */}

        {/* </div> */}
            <footer class="text-center text-white bg-dark"
                // style={{    backgroundColor: "#F8F8F8",
                // borderTop: "1px solid #E7E7E7",
                // textAlign: "center",
                // padding: "20px",
                // position: "fixed",
                // left: "0",
                // bottom: "0",
                // height: "60px",
                // width: "100%",}}
                >
                {/* <!-- Grid container --> */}
                {/* <div class="container p-4"></div> */}
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                {/* <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}> */}
                © 2020 Copyright:
                {/* <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
                {/* </div> */}
                {/* <!-- Copyright --> */}
            </footer>
             </>
       
        
 
    )
}