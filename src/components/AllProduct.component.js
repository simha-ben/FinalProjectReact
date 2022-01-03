import React, { useState, useEffect } from 'react';
import ProgramService from '../services/Program.service';
import { Card, Button } from 'react-bootstrap'
import { connect, shallowEqual } from 'react-redux'
import NewMessage from './NewMessage.component';
import ShowProgram from './ShowProgram.component';

function mapStateToProps(state) {
    return {
        programs: state.ProgramReducer.programs,
        id: state.UserReducer.id,
    };
}
function mapDispatchToProps(dispatch) {

    return {
        // addProductToCart: (i) => dispatch(actions.addProductToCart(i)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(function AllProduct(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    // const [newM, setnewM] = useState(false);
    // const [TO, setTO] = useState(0);
    // const [toName, setToName] = useState('');
    
    let { programs } = props
    
    return (
        <>
            <div className='ctainer'>
                <div className='row'> <h1>AllProduct</h1></div>
                <div className='row'>
                    <div className='col-6'>
                        {
                            programs && programs.map((v, i) => (  
                                <ShowProgram program={v}></ShowProgram>                             
                                // <Card style={{ margin: '5px' }}>
                                //     {/* <Card.Img variant="top" src={val} style={{ width: '18rem', height: '10rem' }} /> */}
                                //     <Card.Body>
                                //         <Card.Title>{v.title}</Card.Title>
                                //         <Card.Text>
                                //             {v.programerName}
                                //             <br />
                                //             {v.description}
                                //         </Card.Text>
                                //         <Button variant="primary" onClick={()=>{setTO(v.programer);setToName(v.programerName);setnewM(!newM)}}>צור קשר</Button>
                                //     </Card.Body>
                                // </Card>
                            ))
                        }
                    </div>

                    {/* <div className='col-6'> {newM &&<NewMessage to={TO} toName={toName}/>}</div> */}
                </div>
            </div>


        </>
    );
})