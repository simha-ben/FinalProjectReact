import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'
import ShowProgram from './ShowProgram.component';
import { useLocation } from "react-router-dom";
import { MDBInput } from "mdbreact";
import swal from 'sweetalert'
import home from '../images/home6.png';

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
        else {

        }
        let program = props.programs.filter(p =>
            p.title && p.title.includes(wordToSearch.current.value) ||
            p.programerName && p.programerName.includes(wordToSearch.current.value)
            || p.description && p.description.includes(wordToSearch.current.value)
        );
        setFilterProgram(program);
        if (program.length <= 0) {
            swal("לא נמצאו תוצאות")
        }
    }
    useEffect(() => {

        if (typeof (fromHome) != 'undefined') {
            wordToSearch.current.value = fromHome
            search()
        }
    }, [])
    return (
        <div style={{ color: 'white', minHeight: '73vh', backgroundImage: `url(${home})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} dir='rtl' >
            <form onSubmit={search}>
                <div>
                    <label >
                        <h3>מה אתה מחפש?</h3>
                        <h5>הדרך הקלה והמהירה ביותר לאיתור תוכנית הרצאה או הפעלה לארוע שלך ,<br></br>מתוך מאגר הסרטים,המצגות, ההרצאות,ההפעלות וההופעות</h5>
                        <br />
                        <label class="field field_v1">
                            <input class="field__input" placeholder="לדוג' תפילה" ref={wordToSearch} />
                            <span class="field__label-wrap">
                                <span class="field__label">אני מחפש...</span>
                            </span>
                        </label>
                    </label>
                    <br />
                    <br />
                    <Button type="submit" variant="outline-light" onClick={search} style={{ color: 'red', borderColor: 'red' }}>מצא אותי!</Button>

                </div>
                {
                    filterProgram && filterProgram.map((v, i) => (
                        <ShowProgram program={v}></ShowProgram>))
                }
            </form>

        </div>
    );
})




