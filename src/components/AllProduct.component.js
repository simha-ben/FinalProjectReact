import React, { useState, useEffect, useRef, setState } from 'react';
import ProgramService from '../services/Program.service';
import { Card, Button, Collapse, Spinner } from 'react-bootstrap'
import { connect, shallowEqual } from 'react-redux'
import { Drawer, } from 'react-bootstrap-drawer';
import ShowProgram from './ShowProgram.component';
import Select from 'react-select'
import { Input } from 'bootstrap'
import makeAnimated from 'react-select/animated'
import MultySelect from './multiSelect';
import { useLocation } from "react-router-dom";
import swal from 'sweetalert'

function mapStateToProps(state) {
    return {
        programs: state.ProgramReducer.programs,
        id: state.UserReducer.id,
    };
}

export default connect(mapStateToProps)
    (function AllProduct(props) {
        const location = useLocation();
        const { fromHome } = location.state || {};
        const price = useRef(200);
        const [programs] = useState([...props.programs]);
        const [viewPrograms, setViewPrograms] = useState([...props.programs]);
        const [selectedValues, setSlectedValues] = useState({});

        useEffect(() => {
            debugger;
            if (fromHome) {
                saveOptions(fromHome)
                filter()
            }
        }, [props.programs])
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
                if (price.current.value && p.price > parseInt(price.current.value))
                    show = false
                return show;
            });
            if (arr.length > 0)
                setViewPrograms(arr);
            else
                swal("אין מוצרים בקטגוריה זו")
        };

        if (programs.length == 0) {
            return (
                <div style={{ minHeight: '73vh' }}>
                    <h1>laoding...</h1>
                    <Spinner animation="border" variant="success" />
                </div>
            )
        }
        return (
            <>
                <br></br>
                <br></br>
                <br></br>
                <div className='row'>
                    
                    <div className='col-3'>
                        <Button onClick={filter}>סנן</Button>
                        <MultySelect tableName={'Age'} onSelect={saveOptions} title="מיועד לגיל"></MultySelect>
                        <MultySelect tableName={'Language'} onSelect={saveOptions} title="שפה"></MultySelect>
                        <MultySelect tableName={'SumOfParticipants'} onSelect={saveOptions} title="כמות משתתפים"></MultySelect>
                        <MultySelect tableName={'Type'} onSelect={saveOptions} title="סוג ההפעלה"></MultySelect>
                        <MultySelect tableName={'Subject'} onSelect={saveOptions} title="נושא"></MultySelect>

                        עד למחיר:  <input type="number" ref={price} />
                        {/*                             
                            <Slider
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}

                    </div>
                    <div className='col-9'>
                        {
                            viewPrograms && viewPrograms.map((v, i) => (
                                <ShowProgram program={v}></ShowProgram>))
                        }
                    </div>
                </div>
                {/* </div> */}


            </>
        );
    })