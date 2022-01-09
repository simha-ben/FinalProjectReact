import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap'
import ShowProgram from './ShowProgram.component';


function mapStateToProps(state) {
    return {
        programs: state.ProgramReducer.programs,
    };
}
function mapDispatchToProps(dispatch) {

    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(function Search(props) {
    const [filterProgram, setFilterProgram] = useState([]);
    let wordToSearch = useRef('')
    function search(e) {
        
        e.preventDefault();
        let program = props.programs.filter(p =>
            p.title && p.title.includes(wordToSearch.current.value)||
            p.programerName && p.programerName.includes(wordToSearch.current.value)
            || p.description && p.description.includes(wordToSearch.current.value)           
        );
        setFilterProgram(program);
    }
    return (
        <>
        <form onSubmit={search}>
             <label>
                 <h3>search a program everywhere...</h3>
                <br/>
                <input ref={wordToSearch}></input></label>
                <br/>
                <br/>
            <Button type="submit" onClick={search}> search me!</Button>
            {
                filterProgram && filterProgram.map((v, i) => (
                    <ShowProgram program={v}></ShowProgram>))
            }
        </form>
           
        </>
    );
})




