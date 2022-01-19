import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux'
import { actions } from '../redux/Action';
import UserService from '../services/User.service';

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

export default connect(mapStateToProps,mapDispatchToProps)( function Registration(props){
    const LoginSchema = Yup.object().shape({
        userName: Yup.string().required('זהו שדה חובה'),
        email: Yup.string().required('זהו שדה חובה').email('מייל לא תקין'),
        password: Yup.string().required('זהו שדה חובה')
    })
    const handleSubmit = async (values) => {
        console.log(`${values.userName} ${values.email} ${values.password}`)
        let token= await UserService.addNewUser(values)
        props.updateId(token);
        console.log("regisrer ststus is: "+token);
    }
    return (
        <>
            <h1>הרשמה</h1>
            <Formik
            initialValues={{userName:'', email: '', password: "" }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}

            >
                <Form>
                    <div className="form-group">
                        <Field placeholder="שם" type="text" name="userName" className="form-control" />
                        <ErrorMessage name="userName" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="מייל" type="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="סיסמא" type="password" name="password" className="form-control" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="טלפון" type="text" name="phone" className="form-control" />
                        <ErrorMessage name="phone" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="כתובת" type="text" name="address" className="form-control" />
                        <ErrorMessage name="address" component="div" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">הרשם</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
 })
