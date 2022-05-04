import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextinput } from '../components';

import '../styles/styles.css'

export const RegisterFormikPage = () => {

  return (
    <div>
        Register Formik Page

        <Formik
        // los initalvalues son los valores que va a manejar el formulario
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                password2: ''
            }}
            // submit ya viene dentro de formik
            onSubmit={(values) => {
                console.log(values)
            }}
            // vienen las validaciones de cada campo con yup
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'debe tener 15 caracteres minimo')
                                    .min(2, 'debe ser mimino 2 caracteres')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(15, 'debe tener 15 caracteres minimo')
                                    .min(2, 'debe ser mimino 2 caracteres')
                                    .required('Requerido'),   
                    email: Yup.string()
                                .email('email no valido')
                                .required('Requerido'),
                    password: Yup.string()
                                .min(6, 'Minimo 6 caracteres')
                                .required('Requerida'),

                    password2: Yup.string()
                                  .required('Requerida')
                                  .oneOf([Yup.ref('password'), null], 'Las contraseñas deben ser iguales')
                    
                })
            }
        >
            {
                // con e hijo de formik manejamos cada campo usando nuestros componentes para cada input
                ({handleReset}) => (
                    
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
                            label='email' 
                            name="email" 
                            placeholder="Tu Email..."
                        />

                        <MyTextinput 
                            label='password'
                            name='password'
                            placeholder='Tu password...'
                        />

                        <MyTextinput 
                            label='password2'
                            name='password2'
                            placeholder='Confirmar Password'
                        />
            
                        <button type='submit'>
                            Submit
                        </button>

                        <button type='submit' onClick={handleReset}>
                            Reset
                        </button>
        
                    </Form>
                )
            }

        </Formik>
    </div>
  )
}