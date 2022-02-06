import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'
import ShowProgram from './ShowProgram.component';
import { useLocation } from "react-router-dom";


function mapStateToProps(state) {
    return {
        programs: state.ProgramReducer.programs,
    };
}


export default connect(mapStateToProps)(function Search(props) {
    const [filterProgram, setFilterProgram] = useState([]);
    let wordToSearch = useRef('')
    const location = useLocation();
    // const { navigation } = props || '';
//   let  fromHome=JSON.stringify(navigation.getParam('fromHome'))
     const { fromHome } = location.state || '';

    function search(e) {
        if (typeof (e) != 'undefined')
            e.preventDefault();
            
        let program = props.programs.filter(p =>
            p.title && p.title.includes(wordToSearch.current.value) ||
            p.programerName && p.programerName.includes(wordToSearch.current.value)
            || p.description && p.description.includes(wordToSearch.current.value)
        );
        setFilterProgram(program);
    }
    useEffect(() => {  
        debugger     
        if (typeof(fromHome) != 'undefined') {
            wordToSearch.current.value = fromHome
            search()
        }
    }, [])
    return (
        <div  style={{minHeight:'73vh'}}>
            <form onSubmit={search}>
                <div>
                    <label>
                        <h3>חיפוששששששש</h3>
                        <br />
                        <input placeholder='אני מחפש/ת...' ref={wordToSearch}></input></label>
                    <br />
                    <br />
                    <Button type="submit" onClick={search}>מצא אותי!</Button>
                </div>
                {
                    filterProgram && filterProgram.map((v, i) => (
                        <ShowProgram program={v}></ShowProgram>))
                }
            </form>

        </div>
    );
})




