import { useForm } from 'react-hook-form'

export const SingUpForm = () => {
    const form = useForm();
    console.log(form)
    const onSubmit = ( ...rest) =>{
        console.log(rest)
    }
    return <main>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <input {...form.register('name')}/>
            <input {...form.register('student')} type='checkbox'/>
            <input
          {...form.register('anotherField', {
            onBlur: (e) => {
              console.log('blur');
            },
          })}
        />
          <button type='submit'></button>  
        </form>
        
    </main>
}