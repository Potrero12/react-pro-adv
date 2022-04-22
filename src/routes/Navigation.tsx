import { Suspense } from "react";
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";

import logo from '../logo.svg'

import { routes } from "./routes";
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

const Navigation = () => {
  return (
      //suspense es el como un async await espera mientras cargo el componente pero haz lo siguiente
    //   el fallback es opcional
      <Suspense fallback={<span>Loading...</span>}> 
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo" />
                    <ul>
                        {
                            routes.map(({to, name, path}) => (
                                <li key={name}>
                                    <NavLink to={to} className={({isActive}) => isActive ? 'nav-active': ''}>{path}</NavLink>
                                </li>
                            ))
                        }

                    </ul>
                </nav>

                <Routes>
                    {/* <Route path="lazy1" element={<LazyPage1/>} />
                    <Route path="lazy2" element={<LazyPage2/>} />
                    <Route path="lazy3" element={<LazyPage3/>} /> */
                    }

                    {
                        routes.map(({path, Component, name}) => (
                            <Route key={name} path={path} element={<Component />} />
                        ))
                    }

                    <Route path="/*" element={<Navigate to="/lazy1" replace/>} />
                </Routes>

            </div>
        </BrowserRouter>
      </Suspense>
  )
}

export default Navigation