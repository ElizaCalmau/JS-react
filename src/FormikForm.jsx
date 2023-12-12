import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const schema = Yup.object({
    email: Yup.string().email().required()
})
export const FormikForm = () => {
    return <Formik initialValues={{email: '', password: ''}}
                    validationSchema={schema}
                    onSubmit={(values, formikBag) => {
                        console.log(values)
                        console.log(formikBag)
                    }} >
                <Form>
                    <Field name='email'/>
                    <ErrorMessage name='email' component='div'/>
                    <Field name='password' />
                    <button type='submit'>submit</button>
                </Form>
            </Formik>
}