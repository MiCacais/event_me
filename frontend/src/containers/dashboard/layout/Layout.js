import React from 'react';
import './Layout.css';

const layout = ( props ) => (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
            <a className="navbar-brand mr-1" href="index.html">Event me</a>
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
                </div>
            </form>
            <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sign out <i class="fa fa-user-circle"></i>
                </a>
            </li>
            </ul>
        </nav><br/>

        <main className="container-fluid main-content">
            {props.children}
        </main>
    </div>
);

export default layout;