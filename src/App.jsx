import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { City } from './City';
import './App.css'

const schema = Yup.object({
  firstName: Yup.string().required('Please enter your name').min(3),
  lastName: Yup.string().required().test('includes-vowels', 'Last Name should contains vowels', (value) => /[aeiouAEIOU]/.test(value)),
  City: Yup.string().required('Please enter your city').test('no-vowels', 'City should not contain vowels', (value) => {
    return !/[aeiouAEIOU]/.test(value)}
  ),
  student: Yup.boolean().required(),
  univercity: Yup.string().when('student', {
    is: true,
    then: (schema) => schema.required().max(8),
    otherwise: (schema) => schema.notRequired()
  }),
  country: Yup.string().matches(/(a|u|i|o)/, 'Country should contain a vowels')
})

function App() {

  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    defaultValues:{
      firstName: ''
    }, 
    resolver: yupResolver(schema)
  });

  const onSubmit = () =>{
    console.log(form.formState)
  }

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <label>
          First Name: 
          <input {...form.register('firstName')}/>
          {form.formState.errors.firstName && <div className='error-message'>{form.formState.errors.firstName.message}</div>}
        </label>
        <label>
          Last Name:
          <input {...form.register('lastName')}type="text"/>
          {form.formState.errors.lastName && <div className='error-message'>{form.formState.errors.lastName.message}</div>}
        </label>
        <label>
          Country
          <input {...form.register('country')}/>
          {form.formState.errors.country && <div className='error-message'> {form.formState.errors.country.message}</div>}
        </label>
        <label>
          City
          <City {...form.register('City')}/>
          {form.formState.errors.City && <div>{form.formState.errors.City.message}</div>}
        </label>
        <label>
          Are you student?
          <input {...form.register('student')} type='checkbox'/>
        </label>
        <label>
          Enter your Univercity:
          <input {...form.register('univercity')}/>
          {form.formState.errors.univercity && <div className='error-message'>{form.formState.errors.univercity.message}</div>}
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
