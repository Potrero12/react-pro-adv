import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";

import RegisterPages from "../03-forms/pages/RegisterPages";

import logo from '../logo.svg'
import { 
    DynamicForms,
    FormikAbstractaction, 
    FormikBasicPage, 
    FormikComponents, 
    FormikYupPage,
    RegisterFormikPage,
} from '../03-forms/pages';

const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to="/register" className={({isActive}) => isActive ? 'nav-active': ''}>Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-basic" className={({isActive}) => isActive ? 'nav-active': ''}>Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-yup" className={({isActive}) => isActive ? 'nav-active': ''}>Formik-yup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-components" className={({isActive}) => isActive ? 'nav-active': ''}>Formik-components</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-abstractation" className={({isActive}) => isActive ? 'nav-active': ''}>Formik-abstractation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register-formik" className={({isActive}) => isActive ? 'nav-active': ''}>Register-Formik</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dynamic-form" className={({isActive}) => isActive ? 'nav-active': ''}>Dynamic-Form</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/register" element={<RegisterPages />} />
                <Route path="formik-basic" element={<FormikBasicPage />} />
                <Route path="formik-components" element={<FormikComponents />} />
                <Route path="formik-yup" element={<FormikYupPage />} />
                <Route path="formik-abstractation" element={<FormikAbstractaction />} />
                <Route path="register-formik" element={<RegisterFormikPage />} />
                <Route path="dynamic-form" element={<DynamicForms />} />

                <Route path="/*" element={<Navigate to="/register" replace/>} />
            </Routes>

        </div>
    </BrowserRouter>
  )
}

export default Navigation