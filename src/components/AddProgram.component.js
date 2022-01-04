import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
// import ProgramService from '../services/Program.service';
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import UserService from '../services/User.service';
import MessageService from '../services/Message.service';
import ShowMessage from './ShowMessage.componnent'
import { Link } from 'react-router-dom';
import NewMessage from './NewMessage.component';
import ProgramService from '../services/Program.service';

function mapStateToProps(state) {
    return {
        id: state.UserReducer.id,
    };
}
function mapDispatchToProps(dispatch) {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(function AddProgram(props) {
    // const [sentMessage, setSentMeaasge] = useState([]);  
    // const [Messages, setMeaasges] = useState([]);   
     // const [userName, setUserName] = useState(" ");  
     let { id } = props;
      // const [createNew,setCreateNew]=useState(false); 
      const LoginSchema = Yup.object().shape({
           ProgramerName: Yup.string().required('this feild is required'), 
           Price: Yup.string().required('this feild is required'),
           Language: Yup.string().required('this feild is required')  
       })
         const handleSubmit = async (values) => {
         console.log(`${values.ProgramerName} ${values.Price} ${values.Language}`)
        let token= await ProgramService.addNewProgram(values)
       props.updateId(token);
      console.log("regisrer ststus is: "+token);
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
            <h3>hello {} :)</h3>
            <Formik
            initialValues={{ }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}

            >
                <Form>
                    <div className="form-group">
                        <Field placeholder="ProgramerName" type="text" name="ProgramerName" className="form-control" />
                        <ErrorMessage name="ProgramerName" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="Type" type="text" name="Type" className="form-control" />
                        <ErrorMessage name="Type" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="Age" type="text" name="Age" className="form-control" />
                        <ErrorMessage name="Age" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="SumOfParticipants" type="text" name="SumOfParticipants" className="form-control" />
                        <ErrorMessage name="SumOfParticipants" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="Description" type="text" name="Description" className="form-control" />
                        <ErrorMessage name="Description" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="Price" type="text" name="Price" className="form-control" />
                        <ErrorMessage name="Price" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="Subject" type="text" name="Subject" className="form-control" />
                        <ErrorMessage name="Subject" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="Migdar" type="text" name="Migdar" className="form-control" />
                        <ErrorMessage name="Migdar" component="div" />
                    </div>
                    <div className="form-group">
                        <Field placeholder="Language" type="text" name="Language" className="form-control" />
                        <ErrorMessage name="Language" component="div" />
                    </div>
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
                </Form>
            </Formik>
            {/* <Button variant="primary" onClick={getSentdMeaasges}>sent</Button>{"   "}
            <Button variant="primary" onClick={getAcceptedMeaasges}>accepted</Button>{"    "}
            <Button variant="primary" onClick={createNewMessage}>new message</Button>
            {
                createNew &&<NewMessage from={id}/>                    
            }
            {
                Messages && Messages.map((m) =>
                    <ShowMessage message={m}></ShowMessage>
                )
            } */}
        </>
    );
})


