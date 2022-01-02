import { Form, Formik, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import UserService from '../services/User.service';
import {connect} from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { actions } from '../redux/Action';

function mapStateToProps(state) {
    return {
      //  programs: state.ProgramReducer.programs,
    };
}
function mapDispatchToProps(dispatch) {

    return {
     updateId: (id) => dispatch(actions.setId(id)),
     updateName: (name) => dispatch(actions.setName(name)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(function Login(props) {
   const nevigate=useNavigate();
    const LoginSchema = Yup.object().shape({
        userName: Yup.string().required('this feild is required'),
        email: Yup.string().required('this feild is required').email('bad email'),
        password: Yup.string().required('this feild is required')
    })
    const handleSubmit = async (values) => {
        console.log(`${values.userName} ${values.email} ${values.password}`)
         const token = await UserService.login(values)
        console.log("the id is: "+token);
        props.updateId(token);
        if(token){
         nevigate('/privateArea')
        }
    } 
    return (
        <>
            <h1>Login</h1>
            <Formik
            initialValues={{userName:'', email: '', password: "" }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}

            >
                <Form>
                    <div className="form-group">
                        <Field placeholder="name" type="text" name="userName" className="form-control" />
                        <ErrorMessage name="userName" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="email" type="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="password" type="password" name="password" className="form-control" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </Formik>
            <div>
                
             לקוח חדש? הרשם  <a href='/registration'>כאן</a>
            </div>
        </>
    );
})
