import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css'

export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components tutorial</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                  .max(15, 'debe tener 15 caracteres minimo')
                                  .required('Requerido'),
                    lastName: Yup.string()
                                  .max(15, 'debe tener 15 caracteres minimo')
                                  .required('Requerido'),   
                    email: Yup.string()
                              .email('email no valido')
                              .required('Requerido'),
                    terms: Yup.boolean()
                              .oneOf([true], 'Debe aceptar las condiciones'),
                    jobType: Yup.string()
                                .notOneOf(['it-junior'], 'Esta opcion no es permitida')
                                .required('Requerido')
                    
                })
            }>
                {
                    (formik) => (
                        
                        <Form>

                            <label htmlFor="firstName">FirstName</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName"/>
                
                            <label htmlFor="lastName">LastName</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName"/>
                
                            <label htmlFor="Email">Email</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name="email"/>

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select" >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="ittsenior">IT-Senior</option>
                                <option value="it-junior">IT-Junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms"/>
                
                            <button type='submit'>
                                Submit
                            </button>
            
                        </Form>
                    )
                }
        </Formik>

    </div>
  )
}
