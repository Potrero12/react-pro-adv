import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css'

import { MyCheckbox, MySelect, MyTextinput } from '../components';


export const FormikAbstractaction = () => {

  return (
    <div>
        <h1>Formik abstractaction tutorial</h1>

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

                            <MyTextinput 
                                label='First Name' 
                                name="firstName" 
                                placeholder="Tu Nombre..."
                            />

                            <MyTextinput 
                                label='Last Name' 
                                name="lastName" 
                                placeholder="Tu Apellido..."
                            />

                            <MyTextinput 
                                label='Email' 
                                name="email" 
                                placeholder="Tu Email..."
                            />

                            <MySelect label="jobType" name="jobType" >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="ittsenior">IT-Senior</option>
                                <option value="it-junior">IT-Junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms & Conditions" name="terms" />
                
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
