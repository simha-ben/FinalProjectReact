import React, { useEffect, useState } from "react";

export default function Counter(props) {
    const[count,setCount]=useState(0)
    let max=props.max
    function animate(obj, initVal, lastVal, duration) {

        let startTime = null;

        //get the current timestamp and assign it to the currentTime variable
        let currentTime = Date.now();

        //pass the current timestamp to the step function
        const step = (currentTime) => {

            //if the start time is null, assign the current time to startTime
            if (!startTime) {
                startTime = currentTime;
            }

            //calculate the value to be used in calculating the number to be displayed
            const progress = Math.min((currentTime - startTime) / duration, 1);

            //calculate what to be displayed using the value gotten above
            setCount(Math.floor(progress * (lastVal - initVal) + initVal))

            //checking to make sure the counter does not exceed the last value (lastVal)
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
            else {
                window.cancelAnimationFrame(window.requestAnimationFrame(step));
            }
        };

        //start animating
        window.requestAnimationFrame(step);
    }
    useEffect(() => {
        animate(null,0,max,(max/5)*1000)
    }, [props.max])
    return(
        <h2>{count}</h2>
    )
}