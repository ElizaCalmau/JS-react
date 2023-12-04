
import {Formik, Form, Field, useFormik} from 'formik'

export const SignUp = () => {
    return(
        <Formik initialValues={{email: '', password: ''}} onSubmit={(values, formicBag)=>{
            console.log(values)
            console.log(formicBag)
            formicBag.resetForm();
        }}>
            {(props)=>{
                return <Form>
                    <label htmlFor='email'>
                        eMail:
                    </label>
                    <Field name='email' type='email' id='email' style={{border: props.touched.email ? '1px solid violet' : '1px solid black'}}/>
                    <label htmlFor='password'>
                        password:
                    </label>
                    <Field name='password' type = 'password' id='password' style={{border: props.touched.password ? '1px solid violet' : '1px solid black'}}/>
                    <button type='submit'>Submit</button>
                </Form>
            }}
        </Formik>
    )
}



export const SignUpHook = () => {
    const formik = useFormik(
        {
            initialValues:{email: '', password : ''},
            onSubmit: (values, formicBag) => {
                formicBag.resetForm();
                console.log(values)
            }
        }
    )

    return <from onSubmit={formik.handleSubmit}>
        <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        name='email'
        />

        <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}//values takes from initialValues
        name='password'
        />
        <button type='submit'>sub</button>
    </from>
}