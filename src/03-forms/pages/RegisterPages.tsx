import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm';

import '../styles/styles.css'

const RegisterPages = () => {

    const { 
        formData, onChange, resetForm, isValidEmail,
        name, password, password2, email
    } = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        console.log(formData);
    }

  return (
    <div>
        Register Page

        <form onSubmit={handleSubmit}>

            <input 
                type="text" 
                placeholder="Name"
                name='name'
                value={name}
                onChange={onChange}
                className={`${name.trim().length <= 0 && 'has-error'}`}
            />
            { name.trim().length <= 0 && <span>Este campo es necesario</span>}

            <input 
                type="email" 
                placeholder="Email"
                name='email'
                value={email}
                onChange={onChange}
                className={`${isValidEmail(email) && 'has-error'}`}
            />
            { !isValidEmail(email) && <span>Email no es valido</span>}

            <input
                type="password" 
                placeholder="Passwrod"
                name='password'
                value={password}
                onChange={onChange}
            />

            { password.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password.trim().length < 6 && password.trim().length > 0 && <span>Este campo es necesario y debe tener 6 caracteres minimo</span>}

            <input 
                type="password" 
                placeholder="Repeat Password"
                name='password2'
                value={password2}
                onChange={onChange}
            />
            { password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password2.trim().length <= 0 && password !== password2 && <span>Las contraseñas deben ser iguales</span>}

            <button type="submit">Create</button>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    </div>
  )
}

export default RegisterPages