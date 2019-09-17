import React from 'react';
import './Layout.css';
import Nav from '../Nav';

const layout = ( props ) => (
    <div>
        <Nav />  
        <br/>
        <main className="container-fluid main-content">
            {props.children}
        </main>
    </div>
);

export default layout;