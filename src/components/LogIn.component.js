import { Form, Formik, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import UserService from '../services/User.service';
import {connect} from 'react-redux'
import { useNavigate ,} from 'react-router-dom'
import { actions } from '../redux/Action';

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

export default connect(mapStateToProps,mapDispatchToProps)(function Login(props) {
   const nevigate=useNavigate();
   
    const LoginSchema = Yup.object().shape({
        userName: Yup.string().required('זהו שדה חובה'),
        email: Yup.string().required('זהו שדה חובה').email('מייל לא תקין'),
        password: Yup.string().required('זהו שדה חובה')
    })
    const handleSubmit = async (values) => {
        console.log(`${values.userName} ${values.email} ${values.password}`)
         const token = await UserService.login(values)
        console.log("the id is: "+token);

        props.updateId(token);
        if(token >1 ){
            nevigate(-1);
        }
        else{
            alert("we're sorry, but we cannot let you in :( please try agin")
        }
    } 
    return (
        <>
            <Formik
            initialValues={{userName:'', email: '', password: "" }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
          
            >
                <div   class="row d-flex justify-content-center">
                <Form class="col-4">
                    <br/><br/>
                    <div className="form-group">
                        <Field placeholder="שם משתמש" type="text" name="userName" className="form-control" />
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
                    <br/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">הכנס</button>
                    </div>
                    
                </Form>
                </div>
            </Formik>
            <br/>
            <div>
                
             לקוח חדש? הרשם  <a href='/registration'>כאן</a>
            </div>
        </>
    );
})
