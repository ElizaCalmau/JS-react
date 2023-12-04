import { Formik, Form, Field, ErrorMessage } from 'formik';
import './SignUpForm.css'

export const SignUpForm = () =>{
    return(
        <Formik
            initialValues={{firstName:'', lastName: '', city: ''}}
            validate={ values => {
                const errors = {};
                if (!values.firstName) {
                  errors.firstName = 'Required';
                } else if (!values.lastName) {
                    errors.lastName = 'Required'
                } else if (!values.city){
                    errors.city = 'Required'
                }
                return errors;
              }}

            onSubmit={(values, formikBag) => {
                console.log(values);
                console.log(formikBag);
            }}>
            <Form className='form-wrapper'>
            <Field name='firstName' className='input'/>
            <ErrorMessage name="firstName" component="div" className='warn'/>
            <Field name='lastName' className='input'/>
            <ErrorMessage name="lastName" component="div" className='warn'/>
            <Field name='city' className='input'/>
            <ErrorMessage name="city" component="div" className='warn'/>
            <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}