import { Formik, Form, Field } from 'formik';
import { Input } from './cmp/Input'
import { InputWrapper } from './cmp/InputWrapper'
import './App.css'
import { SignUp, SignUpHook } from './cmp/signup';

function App() {

  return(
    <>
      <InputWrapper>
        {(value, onChange)=>{
          return <Input value={value} onChange={onChange}/>
        }}
      </InputWrapper>
      <Formik enableReinitialize 
      initialValues={{firstName: ''}}
      onSubmit={(values, formikBag) => {
        console.log('values', values)
        console.log('formikBag', formikBag)
      }}>
        {(props)=>{
          console.log(props)
          return <Form>
            <label>
              First Name: 
              <Field name='firstName'/>
            </label>
            <button type='submit'>Submit</button>
          </Form>
        }}
      </Formik>
      <SignUp/>
      <SignUpHook/>
    </>
  )
}

export default App
