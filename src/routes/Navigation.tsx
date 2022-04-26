import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";
import { ShoppingPage } from "../02-Component-patterns/pages/ShoppingPage";

import logo from '../logo.svg'

const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to="/home" className={({isActive}) => isActive ? 'nav-active': ''}>Shopping</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active': ''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user" className={({isActive}) => isActive ? 'nav-active': ''}>User</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="about" element={<h1>About Page</h1>} />
                <Route path="user" element={<h1>User Page</h1>} />
                <Route path="/home" element={<ShoppingPage />} />

                <Route path="/*" element={<Navigate to="/home" replace/>} />
            </Routes>

        </div>
    </BrowserRouter>
  )
}

export default Navigation