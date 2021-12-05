import React, { useState, useEffect } from 'react';
import ProgramService from '../services/Program.service';
export default function AllProduct() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [program, setProgram] = useState([]);
    useEffect(() => {

        async function service() {
            try {

                let p = await ProgramService.getAllProgram();
                setIsLoaded(true);
                setProgram(p);
            } catch (error) {
                setIsLoaded(true)
                setError(error)
            }


        }
        service()
    }, [])


    return (
        <>
            <h1>AllProduct</h1>
        </>
    );
}