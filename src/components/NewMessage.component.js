import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import MessageService from '../services/Message.service';
import { connect } from 'react-redux';
import { Alert,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
/**
 * 
 * @param {function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

render(<AlertDismissibleExample />);} state 
 * @returns 
 */
function mapStateToProps(state) {
    return {
        id: state.UserReducer.id,
    };
}
function mapDispatchToProps(dispatch) {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(function NewMessage(props) {
    const [from] = useState(props.from);
    const [toID] = useState(props.to);
    const [toName] = useState(props.toName);
    let { id } = 0;
    if (props.id) {
        id = props.id
    }
    
    if (id == null) {
        return (
            <Alert variant="danger">
                <div className="alert alert-danger alert-dismissible">
                    אווופס עדיין לא נכנסת למערכת
                    <Link to="/Login" className="close" data-dismiss="alert" aria-label="close">&times;להתחברות/הרשמה לחץ כאן</Link>
                    <strong></strong>
                    return <Button >Show Alert</Button>;
                </div>
                </Alert>
        )
    }

    const MessageSchema = Yup.object().shape({
        to: Yup.number().required('this feild is required'),
        title: Yup.string().required('this feild is required'),
        context: Yup.string(),
    })
    const handleSubmit = async (values) => {
        console.log(`${values.title} `)
        let aaa = {
            FromUser: from,
            ToUser: toID || parseInt(values.to),
            Title: values.title,
            Content: values.context
        }
        const answer = await MessageService.sendMessage(aaa);
        console.log(answer);
        if (answer == -1) {
            alert("נמען לא חוקי")
        }
    }
    return (

        <Formik
            initialValues={{ to: 0, title: '', context: "" }}
            onSubmit={handleSubmit}
            validationSchema={MessageSchema}
        >
            <Form>
                {
                    !toID && <div className="form-group">
                        <Field placeholder="to" type="text" name="to" className="form-control" />
                        <ErrorMessage name="to" component="div" />
                    </div>
                }
                {
                    toName && <div className="form-group">
                        <Field value={toName} type="text" name="to" className="form-control" />
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
})