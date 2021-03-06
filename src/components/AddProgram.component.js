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
                swal("?????????????? ?????????? ????????????", `???????????? ?????????? ?????????? ????????????`, "success")
            }
            else {
                swal("???????? ?????????? ?????????? ?????????? ??????????????", `?????? ??????`, "error")
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
            <h3>???? ???????????? ???? ???????? ??????????????
                <br></br>
                ???????????? ???????????? ?????????? ???????????? ?????? ?????????? ???????????? ?????????????? ?????????? ?????????? :)
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
                                <Field placeholder="???? ??????????????" type="text" name="Title" className="form-control" />
                                <ErrorMessage name="Title" component="div" />
                            </div>

                            <div className="form-group">
                                <Field placeholder="????????" component="textarea" rows='4' type="text" name="Description" className="form-control" />
                                <ErrorMessage name="Description" component="div" />
                            </div>
                            <div className="form-group">
                                <Field type="text" placeholder="???? ??????????"
                                    name="ProgramerName" className="form-control" />
                                <ErrorMessage name="ProgramerName" component="div" />
                            </div>
                            <Field name="Age" placeholder="?????????? ????????" component={SelectField} options={allOptions["Age"]} />
                            <Field name="SumOfParticipants"
                                placeholder="???????? ??????????????" component={SelectField}
                                options={allOptions["SumOfParticipants"]} />


                            <div className="form-group">
                                <Field placeholder="????????" type="number" name="Price" className="form-control" />
                                <ErrorMessage name="Price" component="div" />
                            </div>
                            <Field name="Subject" placeholder="????????" component={SelectField}
                                options={allOptions["Subject"]} />
                            <Field name="Type" placeholder="?????? ????????????" component={SelectField}
                                options={allOptions["Type"]} />
                                <Field name="Migdar" placeholder="?????????? ??" component={SelectField}
                                options={allOptions["Migdar"]} />
                            <Field name="Language" placeholder="??????" component={SelectField}
                                options={allOptions["Language"]} />

                            <div className="form-group">
                                <Field placeholder="?????????? ??????????" type="date" name="PublishDate" className="form-control" />
                                <ErrorMessage name="PublishDate" component="div" />
                            </div>

                            <div className="form-group">
                            {/* <input type={'file'}onChange={(event)=>setFile({ file: event.target.files[0] })} name='file'></input> */}
                                <Field placeholder="??????????" type="file" name="file" onChange={(event)=>setFile({ file: event.target.files[0] })} className="form-control" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">??????</button>
                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
        </>
    );
})