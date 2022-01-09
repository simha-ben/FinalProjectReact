import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Select from 'react-select';
import SelectField from './SelectField';
import ProgramService from '../services/Program.service';

function mapStateToProps(state) {
    return {
        id: state.UserReducer.id,
        allOptions: state.ProgramReducer.optionSetValues
    };
}
function mapDispatchToProps(dispatch) {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(function AddProgram(props) {

    const [UserName, setUserName] = useState("שרה")
    let { id, allOptions } = props;
    // useEffect(
    //     async () => {
    //         if (id) {
    //             let name = await UserService.getNameById(id);
    //             
    //             setUserName(name);
    //         }
    //     }, []
    // )
    const LoginSchema = Yup.object().shape({
        ProgramerName: Yup.string().required('this feild is required'),
        Price: Yup.number().required('this feild is required'),
        Title: Yup.string().required('this feild is required'),
        PublishDate: Yup.string().required('this feild is required'),
        Migdar: Yup.string(),//.required('this feild is required'),
        Subject: Yup.string(),//.required('this feild is required'),
        Description: Yup.string().required('this feild is required'),
        SumOfParticipants: Yup.string(),//.required('this feild is required'),
        Type: Yup.string(),//.required('this feild is required'),
        Age: Yup.string(),//.required,//('this feild is required'),
        Language: Yup.string(),//.required('this feild is required')
    })
    const handleSubmit = async (values) => {
        
        console.log(values);
        values.programmer=id;
        let token = await ProgramService.addNewProgram(values);
        console.log("regisrer ststus is: " + token);
    }
    if (!id) {
        return (
            < div>
                <div className="alert alert-danger alert-dismissible">
                    אווופס עדיין לא נכנסת למערכת
                    <Link to="/Login" className="close" data-dismiss="alert" aria-label="close">&times;להתחברות/הרשמה לחץ כאן</Link>
                    <strong></strong>

                </div>
            </div>
        )
    }
    return (
        <>
            <h3>enter the program details</h3>
            <Formik
                initialValues={{ProgramerName: UserName}}
                validationSchema={LoginSchema}
                onSubmit={ values => {
                     handleSubmit(values);
                     }}
            >
                 {({ errors, touched }) => (
                <Form class="row row d-flex justify-content-center" >
                    <div class="col-5 ">
                        <div className="form-group">
                            <Field type="text"
                                name="ProgramerName" className="form-control" />
                            <ErrorMessage name="ProgramerName" component="div" />
                        </div>
                        <Field name="Age" component={SelectField} options={allOptions["Age"]} />
                        <Field name="SumOfParticipants"
                         placeholder="Sum Of Participants" component={SelectField} 
                         options={allOptions["SumOfParticipants"]} />
                        
                        <div className="form-group">
                            <Field placeholder="Description" type="text" name="Description" className="form-control" />
                            <ErrorMessage name="Description" component="div" />
                        </div>
                        <div className="form-group">
                            <Field placeholder="Price" type="text" name="Price" className="form-control" />
                            <ErrorMessage name="Price" component="div" />
                        </div>
                        <Field name="Subject" component={SelectField} 
                         options={allOptions["Subject"]} />
                         <Field name="Migdar" component={SelectField} 
                         options={allOptions["Migdar"]} />
                        <Field name="Language" component={SelectField} 
                         options={allOptions["Language"]} />
                     
                        <div className="form-group">
                            <Field placeholder="PublishDate" type="text" name="PublishDate" className="form-control" />
                            <ErrorMessage name="PublishDate" component="div" />
                        </div>
                        <div className="form-group">
                            <Field placeholder="Title" type="text" name="Title" className="form-control" />
                            <ErrorMessage name="Title" component="div" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    
                </Form>
                 )}
            </Formik>
        </>
    );
})