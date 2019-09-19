import React from 'react';
import { Link } from 'react-router-dom';

const nav = () => (
    <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
        <Link to='/dashboard' className="navbar-brand mr-1">Event me</Link>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group"></div>
        </form>
        <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown no-arrow">
                <Link to='/logout' className="nav-link">Sign out <i className="fa fa-user-circle"></i></Link>
            </li>
        </ul>
    </nav>
);

export default nav;