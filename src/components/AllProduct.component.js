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
        const [programs, setPrograms] = useState([...props.programs]);
        const [viewPrograms, setViewPrograms] = useState([...props.programs]);
        const [selectedValues, setSlectedValues] = useState({});

        useEffect(() => {
            debugger;
            if (props.programs && props.programs.length > 0) {                
                setPrograms([...props.programs])
                setViewPrograms([...props.programs])
            }
            if (fromHome) {
                saveOptions(fromHome)
                filter()
                if (fromHome) {
                    setSlectedValues({ key: 'type', value: [] })
                    setSlectedValues({ key: 'migdar', value: [] })
                }
            }
        }, [props.programs])
        function camelize(str) {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            }).replace(/\s+/g, '');
        }
        function saveOptions(e) {
            selectedValues[camelize(e.key)] = e.value;
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
            else {
                swal("?????? ???????????? ???????????????? ????")
                setViewPrograms([...props.programs])
            }

        };

        if (programs.length <= 0) {
            return (
                <div style={{ minHeight: '73vh',fontSize:50 }}>
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
                        <Button onClick={filter}>??????</Button>
                        <MultySelect tableName={'Age'} onSelect={saveOptions} title="?????????? ????????"></MultySelect>
                        <MultySelect tableName={'Migdar'} onSelect={saveOptions} title="?????????? ????????"></MultySelect>
                        <MultySelect tableName={'Language'} onSelect={saveOptions} title="??????"></MultySelect>
                        <MultySelect tableName={'SumOfParticipants'} onSelect={saveOptions} title="???????? ??????????????"></MultySelect>
                        <MultySelect tableName={'Type'} onSelect={saveOptions} title="?????? ????????????"></MultySelect>
                        <MultySelect tableName={'Subject'} onSelect={saveOptions} title="????????"></MultySelect>
                        <h5>???? ??????????:</h5>
                        <input type="number" ref={price} className="priceInput" />
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