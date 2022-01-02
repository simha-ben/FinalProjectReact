import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import MessageService from '../services/Message.service';
export default function NewMessage(props) {
    const [from] = useState(props.from);
    const [to] = useState(props.to);    
    const MessageSchema = Yup.object().shape({
        to: Yup.number().required('this feild is required'),
        title: Yup.string().required('this feild is required'),
        context: Yup.string(),       
    })
    const handleSubmit = async (values) => {
        console.log(`${values.title} `)        
        let aaa={
        FromUser: from,
        ToUser:to||parseInt(values.to),
        Title: values.title,
        Content: values.context
       }
       const answer=await MessageService.sendMessage(aaa);
       console.log(answer);
       if(answer==-1)
       {
           alert("נמען לא חוקי")
       }
    } 
    return (
        
        <Formik
        initialValues={{to:0,title:'', context: "" }}
        onSubmit={handleSubmit}
        validationSchema={MessageSchema}
        >
            <Form>
                {
                    !to&&<div className="form-group">
                    <Field placeholder="to" type="text" name="to" className="form-control" />
                    <ErrorMessage name="to" component="div" />
                </div>
                }
                <div className="form-group">
                    <Field placeholder="title" type="text" name="title" className="form-control" />
                    <ErrorMessage name="title" component="div" />
                </div>
                <div className="form-group">
                    <Field placeholder="context" type="text" name="context" className="form-control" />                   
                </div>               
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </Form>
        </Formik>

    );
}