import { useFormik } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                          .max(15, 'debe tener 15 caracteres minimo')
                          .required('Requerido'),
            lastName: Yup.string()
                          .max(15, 'debe tener 15 caracteres minimo')
                          .required('Requerido'),   
            email: Yup.string()
                      .email('email no valido')
                      .required('Requerido')
            
        })
    });

  return (
    <div>
        <h1>Formik Yup tutorial</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="firstName">FirstName</label>
            <input type="text" {...getFieldProps('firstName')} />
            { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }

            <label htmlFor="lastName">LastName</label>
            <input 
                type="text" {...getFieldProps('lastName')}
            />
            { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }

            <label htmlFor="Email">Email</label>
            <input 
                type="email" {...getFieldProps('email')}
            />
            { touched.email && errors.email && <span>{errors.email}</span> }

            <button type='submit'>
                Submit
            </button>

        </form>
    </div>
  )
}
