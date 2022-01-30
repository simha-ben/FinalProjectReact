import React, { useState, useEffect } from 'react';
import '../style/Footer.css'
export default function Footer() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [tasks, setTasks] = useState([]);

    return (
        <div style={{width:'100vw',height:'14vh',backgroundColor:'black'}}>
            footer
        </div>
    )
    }