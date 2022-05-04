import { Formik, Form } from 'formik'
import { MySelect, MyTextinput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: {[key:string]: any} = {};
const requiredFields: {[key:string]: any} = {};

for(const input of formJson) {
    initialValues[input.name] = input.value

    if(!input.validations) continue;

    let schema = Yup.string()

    for(const rule of input.validations) {
        if(rule.type === 'required') {
            schema = schema.required('Este Campo es Requerido');
        }

        // ... other rules
        if(rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 1 , `Minimo de ${(rule as any).value || 1} caracteres`)
        }

        if(rule.type == 'email'){
            schema = schema.email('No es un email')
        }

    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForms = () => {
  return (
    <div>
        <h1>Dynamic forms</h1>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) =>{
                console.log(values)
            }}
        >
            {(formik) => (
                <Form>
                    
                    { formJson.map( ({type, name, placeholder, label, option}) => {

                        if(type === 'input' || type === 'password' || type === 'email'){
                            return <MyTextinput
                                        key={name}
                                        type={(type as any)} 
                                        label={label} 
                                        name={name} 
                                        placeholder={placeholder}
                                    />
                        } else if (type === 'select'){
                            return (
                                <MySelect
                                    key={name}
                                    label={label} 
                                    name={name} 
                                >
                                    <option value="">Select an option</option>
                                    {
                                        option?.map( ({id, description}) => (
                                            <option key={id} value={id}>{description}</option>
                                        ))
                                    }
                                </MySelect>
                            )
                        }

                        return <span>Type: {type} no es soportado</span>
                    })}

                    <button
                        type='submit'
                    >
                        submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
  )
}
