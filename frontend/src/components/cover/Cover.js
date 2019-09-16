import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cover.css'

class Cover extends Component {

    componentDidMount(){
        document.body.classList.add('big-picture');
    }

    componentWillUnmount(){
        document.body.classList.remove('big-picture'); 
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="mt-5">Event me</h1>
                            <p>Your system for event management</p>
                            <Link to='/login' className="btn btn-light">Sign in</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Cover;