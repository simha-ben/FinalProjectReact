import { Form, Formik, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import UserService from '../services/User.service';
import { connect } from 'react-redux'
import { Navigate, useNavigate,useLocation } from 'react-router-dom'
import { actions } from '../redux/Action';
import swal from 'sweetalert'
import '../style/Input.css'
import '../style/Form.css'
import { FaUserCircle } from 'react-icons/fa'


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

export default connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
    const nevigate = useNavigate();
    const location = useLocation();
    
    const LoginSchema = Yup.object().shape({
        userName: Yup.string().required('זהו שדה חובה'),
        email: Yup.string().required('זהו שדה חובה').email('מייל לא תקין'),
        password: Yup.string().required('זהו שדה חובה')
    })
    const handleSubmit = async (values) => {
        console.log(`${values.userName} ${values.email} ${values.password}`)
        const token = await UserService.login(values)
        console.log("the id is: " + token);
        if (token > 1) {
            props.updateId(token);
        ;
             if (   location.pathname!= '/privateArea')
                nevigate(-1)
        }
        else {
            swal("שגיאה בהזנת הנתונים ", "נסה שוב שים לב לשפת המקלדת", 'error')
        }
    }
    return (
        <div style={{ minHeight: '73vh' }} class="row d-flex justify-content-center"  >

            <div className='formDiv' >

                <Formik
                    initialValues={{ userName: '', email: '', password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={LoginSchema}

                >

                    <div class="row d-flex justify-content-center" >
                        <FaUserCircle style={{ fontSize: 100, color: 'rgb(41, 151, 161)' }} />  <h3>התחברות</h3>

                        <Form className='col-8'>

                            <div className="form-group">
                                <Field placeholder="שם משתמש" type="text" name="userName" className="form-control MyField" />
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
                            <br />
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(41, 151, 161)' }}>הכנס</button>
                            </div>

                        </Form>
                    </div>
                </Formik>
                <br />
                <div>
                    לקוח חדש? הרשם  <a href='/registration'>כאן</a>
                </div>
            </div>
        </div>
    );
})
