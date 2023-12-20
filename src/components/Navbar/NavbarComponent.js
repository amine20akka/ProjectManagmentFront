import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import ListTasks from '../ListTasks';
import './NavbarStyle.css';
import ProjectComponent from '../ProjectComponent';

const NavbarComponent = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-elements">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tasks">Tasks</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/*" element={<ProjectComponent />} />
                    <Route path="/tasks/*" element={<ListTasks />} />
                </Routes>
            </div>
        </nav>
    );
};

export default NavbarComponent;
