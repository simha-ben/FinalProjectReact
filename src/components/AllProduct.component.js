import React, { useState, useEffect } from 'react';
import ProgramService from '../services/Program.service';
import { Card, Button } from 'react-bootstrap'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        programs: state.ProgramReducer.programs,
    };
}
function mapDispatchToProps(dispatch) {

    return {
        // addProductToCart: (i) => dispatch(actions.addProductToCart(i)),

    };
}

export default connect(mapStateToProps,mapDispatchToProps)( function AllProduct(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    let{programs}=props
    // useEffect(() => {
    //     async function service() {
    //         try {
    //             let p = await ProgramService.getAllProgram();
    //             debugger;
    //             console.log(p);
    //             setIsLoaded(true);
    //             setProgram(p);
    //         } catch (error) {
    //             setIsLoaded(true)
    //             setError(error)
    //         }
    //     }
    //     service()
    // }, [])


    return (
        <>
            <h1>AllProduct</h1>
            {
               programs&& programs.map((v,i)=>(
                    <Card style={{ width: '18rem', margin: '5px' }}>
                    {/* <Card.Img variant="top" src={val} style={{ width: '18rem', height: '10rem' }} /> */}
                    <Card.Body>
                        <Card.Title>{v.title}</Card.Title>
                        <Card.Text>
                            {v.programerName}
                            <br/>
                            {v.description}
                        </Card.Text>
                        {/* <Button variant="primary" onClick={() => { props.addP(index+1) }}>buy me</Button> */}
                    </Card.Body>
                </Card>
                ))
            }
        </>
    );
})