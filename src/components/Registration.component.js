import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux'
import { actions } from '../redux/Action';
import UserService from '../services/User.service';
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import '../style/Form.css'
import {AiOutlineUserAdd} from 'react-icons/ai'

function mapStateToProps(state) {
    return {
        //  programs: state.ProgramReducer.programs,
    };
}
function mapDispatchToProps(dispatch) {

    return {
        updateId: (id) => dispatch(actions.setId(id)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(function Registration(props) {
    const nevigate = useNavigate();


    const LoginSchema = Yup.object().shape({
        userName: Yup.string().required('זהו שדה חובה'),
        email: Yup.string().required('זהו שדה חובה').email('מייל לא תקין'),
        password: Yup.string().required('זהו שדה חובה')
    })
    const handleSubmit = async (values) => {
        try {
            console.log(`${values.userName} ${values.email} ${values.password}`)
            let token = await UserService.addNewUser(values)
            props.updateId(token);
            console.log("regisrer ststus is: " + token);
            if (token > 0) {
                swal("ההרשמה הסתיימה בהצלחה", "ברוכים הבאים :)", "success")
                nevigate(-1)
            }
            if (token == -1) {
                swal("הרשמה נכשלה כבר קיים במערכת כזה משתמש ", " נסה שם משתמש אחר או מייל שונה", "error")
            }
        }
        catch (err) {

        }

    }
    return (
        <div  style={{minHeight:'73vh'}} className="row d-flex justify-content-center ">
            <div className=' formDiv'>
                <AiOutlineUserAdd style={{color:'rgb(41, 151, 161)',fontSize: 100 }}/>
            <h3>טופס רישום</h3>

            <Formik
                initialValues={{ userName: '', email: '', password: "" }}
                onSubmit={handleSubmit}
                validationSchema={LoginSchema}

            >
                <div class="row d-flex justify-content-center">
                    <Form class="col-8">
                        <div className="form-group">
                            <Field placeholder="שם" type="text" name="userName" className="form-control MyField" />
                            <ErrorMessage name="userName" component="div" />
                        </div>
                        <div className="form-group">
                            <Field placeholder="מייל" type="email" name="email" className="form-control MyField" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="form-group">
                            <Field placeholder="סיסמא" type="password" name="password" className="form-control MyField" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <div className="form-group">
                            <Field placeholder="טלפון" type="text" name="phone" className="form-control MyField" />
                            <ErrorMessage name="phone" component="div" />
                        </div>
                        <div className="form-group">
                            <Field placeholder="כתובת" type="text" name="address" className="form-control MyField" />
                            <ErrorMessage name="address" component="div" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" style={{backgroundColor:'rgb(41, 151, 161)'}}>הרשם</button>
                        </div>
                    </Form>
                </div>
            </Formik>
            </div>
        </div>
    );
})
