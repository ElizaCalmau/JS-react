import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'

const schema = Yup.object({
    firstName: Yup.string().required(),
    student: Yup.boolean().notRequired(),
    univercity: Yup.string().when('student', {
        is: true,
        then: (schema) => schema.required().test('number-validation', 'string should not contain the number', (value)=>{
            return !/\d/.test(value)
        }) ,
        otherwise: (schema) => schema.notRequired()
    })
})

export const ReactHookForm = () => {
    const form = useForm({
        defaultValues : {
            firstName: ''
        },
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => console.log(data, form);
    const watch = form.watch('firstName');
    console.log(watch)

    return(
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <input {...form.register('firstName')}/>
            <input {...form.register('student')} type='checkbox'/>
            <input {...form.register('univercity', {
                onBlur: () => {
                    console.log(form.formState)
                } 
            })}/>
            {form.formState.errors.univercity && <div>{form.formState.errors.univercity.message}</div>}
            <button type="submit">Submit</button>
            
        </form>
    )
}