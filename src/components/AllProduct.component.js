import React, { useState, useEffect, useRef } from 'react';
import ProgramService from '../services/Program.service';
import { Card, Button, Collapse} from 'react-bootstrap'
import { connect, shallowEqual } from 'react-redux'
import { Drawer, } from 'react-bootstrap-drawer';
import ShowProgram from './ShowProgram.component';
import Select from 'react-select'
import { Input } from 'bootstrap'
import makeAnimated from 'react-select/animated'
import MultySelect from './multiSelect';


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


export default connect(mapStateToProps, mapDispatchToProps)
    (function AllProduct(props) {

const price=useRef(200);
        let { programs } = props;
        const [viewPrograms, setViewPrograms] = useState([...programs]);
        const [selectedValues, setSlectedValues] = useState({});


        function saveOptions(e) {
            selectedValues[e.key.toLocaleLowerCase()] = e.value; 
            setSlectedValues(selectedValues);
            console.log(selectedValues);
        }
        function filter() {
            let arr = programs.filter(p => {
                let show = true;
                for (const key in selectedValues) {
                    if (p[key] && selectedValues[key] && selectedValues[key].length > 0) {
                        show = selectedValues[key].filter(i => i.value == p[key]).length > 0;
                        if (!show) {
                            return false;
                        }
                    }
                }
                if(price.current.value && p.price < parseInt(price.current.value))
                   show=false
//לבדוק מה הפונקציה עושה
                return show;
            })
            setViewPrograms(arr);
        };


        return (
            <>
                <div className='ctainer'>
                    <div className='row'> <h1>AllProduct</h1></div>
                    <div className='row'>
                        <div className='col-9'>
                            {
                                viewPrograms && viewPrograms.map((v, i) => (
                                    <ShowProgram program={v}></ShowProgram>))
                            }
                        </div>
                        <div className='col-3'>
                            <Button onClick={filter}>filter</Button>
                            <MultySelect tableName={'Age'} onSelect={saveOptions}></MultySelect>
                            <MultySelect tableName={'Language'} onSelect={saveOptions}></MultySelect>
                            <MultySelect tableName={'SumOfParticipants'} onSelect={saveOptions} title="Sum Of Participants"></MultySelect>
                            <MultySelect tableName={'Type'} onSelect={saveOptions} ></MultySelect>
                            <MultySelect tableName={'Subject'} onSelect={saveOptions}></MultySelect>

                            up to:  <input type="number" ref={price}/>
{/*                             
                            <Slider
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}

                        </div>
                    </div>
                </div>


            </>
        );
    })