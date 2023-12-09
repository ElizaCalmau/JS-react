import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const signupSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string()
})
export const SingUpForm = () => {
    return <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={signupSchema}
       onSubmit={(values,formikBag) => {
         console.log(values, formikBag)
       }}
     >
        {() => {
            return(
                <Form>
                    <Field name='email'/>
                    <ErrorMessage name='email'/>
                    <Field name='password'/>
                </Form>
            )
        }}
     </Formik>
}