import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Select from 'react-select';
import SelectField from './SelectField';
import ProgramService from '../services/Program.service';
import DisConnectedAlert from './DisConnectedAlert';
import swal from 'sweetalert'

function mapStateToProps(state) {
    return {
        id: state.UserReducer.id,
        allOptions: state.ProgramReducer.optionSetValues
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(function AddProgram(props) {

    const [UserName, setUserName] = useState("")
    const [file, setFile] = useState()
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
        PublishDate: Yup.date().required('this feild is required'),
        Migdar: Yup.string(),//.required('this feild is required'),
        Subject: Yup.string(),//.required('this feild is required'),
        Description: Yup.string().required('this feild is required'),
        SumOfParticipants: Yup.string(),//.required('this feild is required'),
        Type: Yup.string(),//.required('this feild is required'),
        Age: Yup.string(),//.required,//('this feild is required'),
        Language: Yup.string(),//.required('this feild is required')
        //file:new File(["foo"], "foo.txt")//new File([""], "")// Yup.file(),//.required('this feild is required')
    })
    const handleSubmit = async (values) => {        
        values.file=file; 
        values.Programer = id;
        const formData = new FormData()
        if(values.file){
            formData.append('FormFile',values.file.file)
            formData.append('FileName',values.file.file.name)
        }
        console.log(values);
       
        try {
            formData.append('jsonString',JSON.stringify(values))
            let token = await ProgramService.addNewProgram(formData);
            if (token > 0) {
                swal("התוכנית נכנסה למערכת", `הפרטים נשלחו למהנל לאישור`, "success")
            }
            else {
                swal("ארעה שגיאה במהלך רישום התוכנית", `נסה שוב`, "error")
            }
        }
        catch (err) {
            alert(err.message)
        }

    }
    if (!id) {
        return (
            <DisConnectedAlert></DisConnectedAlert>
        )
    }
    return (
        <>
            <h3>נא הכניסי את פרטי התוכנית
                <br></br>
                הפרטים יועברו למנהל המערכת ואם ימצאו ראויים התוכנית תוכנס למאגר :)
            </h3>
            <Formik
                initialValues={{ ProgramerName:UserName }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    handleSubmit(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form class="row row d-flex justify-content-center" >
                        <div class="col-5 ">
                            <div className="form-group">
                                <Field placeholder="שם התוכנית" type="text" name="Title" className="form-control" />
                                <ErrorMessage name="Title" component="div" />
                            </div>

                            <div className="form-group">
                                <Field placeholder="תאור" component="textarea" rows='4' type="text" name="Description" className="form-control" />
                                <ErrorMessage name="Description" component="div" />
                            </div>
                            <div className="form-group">
                                <Field type="text" placeholder="שם המפיק"
                                    name="ProgramerName" className="form-control" />
                                <ErrorMessage name="ProgramerName" component="div" />
                            </div>
                            <Field name="Age" placeholder="מיועד לגיל" component={SelectField} options={allOptions["Age"]} />
                            <Field name="SumOfParticipants"
                                placeholder="כמות משתתפים" component={SelectField}
                                options={allOptions["SumOfParticipants"]} />


                            <div className="form-group">
                                <Field placeholder="מחיר" type="number" name="Price" className="form-control" />
                                <ErrorMessage name="Price" component="div" />
                            </div>
                            <Field name="Subject" placeholder="נושא" component={SelectField}
                                options={allOptions["Subject"]} />
                            <Field name="Type" placeholder="סוג ההפעלה" component={SelectField}
                                options={allOptions["Type"]} />
                                <Field name="Migdar" placeholder="מתאים ל" component={SelectField}
                                options={allOptions["Migdar"]} />
                            <Field name="Language" placeholder="שפה" component={SelectField}
                                options={allOptions["Language"]} />

                            <div className="form-group">
                                <Field placeholder="תאריך יצירה" type="date" name="PublishDate" className="form-control" />
                                <ErrorMessage name="PublishDate" component="div" />
                            </div>

                            <div className="form-group">
                            {/* <input type={'file'}onChange={(event)=>setFile({ file: event.target.files[0] })} name='file'></input> */}
                                <Field placeholder="תמונה" type="file" name="file" onChange={(event)=>setFile({ file: event.target.files[0] })} className="form-control" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">שלח</button>
                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
        </>
    );
})