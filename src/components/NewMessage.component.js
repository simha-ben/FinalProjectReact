import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import MessageService from '../services/Message.service';
import { connect } from 'react-redux';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DisConnectedAlert from './DisConnectedAlert';
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
    const [toID] = useState(props.to);
    const [toName] = useState(props.toName);
    let { id } = 0;
    if (props.id) {
        id = props.id
    }

    if (id == null) {
        return (
            <DisConnectedAlert></DisConnectedAlert>
        )
    }

    const MessageSchema = Yup.object().shape({
        to: Yup.number().required('this feild is required'),
        title: Yup.string().required('this feild is required'),
        context: Yup.string(),
    })
    const handleSubmit = async (values) => {
        debugger
        console.log(`${values.title} `)
        let aaa = {
            FromUser: id,
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
        <div class="row d-flex justify-content-center">

            <Formik
                initialValues={{ to: 0, title: '', context: "" }}
                onSubmit={handleSubmit}
                validationSchema={MessageSchema}
            >
                <Form  class="col-4">
                    {
                        !toID && <div className="form-group">
                           אל <Field placeholder="to" type="text" name="to" className="form-control" />
                            <ErrorMessage name="to" component="div" />
                        </div>
                    }
                    {
                        toName && <div className="form-group">
                         אל   <Field value={toName} type="text" name="to" className="form-control" />
                            <ErrorMessage name="to" component="div" />
                        </div>
                    }
                    <div className="form-group">
                      נושא  <Field placeholder="נושא" type="text" name="title" className="form-control" />
                        <ErrorMessage name="title" component="div" />
                    </div>
                    <div className="form-group">
                      תוכן  <Field  type="text" name="context" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
})
/**
 * programer: 101
programerName:
 */