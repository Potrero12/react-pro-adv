import { useState, ChangeEvent } from 'react';


export const useForm = <T>( initialData: T ) => {

    const [formData, setFormData] = useState(initialData);

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    const resetForm = () => {
        setFormData({...initialData})
    }


    return {
        ...formData,
        //Properties
        formData,

        //methods
        onChange,
        isValidEmail,
        resetForm,
    }
}