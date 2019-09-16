import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.css';
import * as actions from '../../store/actions/index';
import Input from '../../components/UI/Input';

class Login extends Component {
    state = {
        controls: {
            email: {
                element: 'input',
                label: 'Email',
                type: 'email',
                value: '',
                touched: false
            },
            password: {
                element: 'input',
                label: 'Password',
                type: 'password',
                value: '',
                touched: false
            }
        }
    }

    componentDidMount(){
        document.body.classList.add('bg-dark');
    }

    componentWillUnmount(){
        document.body.classList.remove('bg-dark'); 
    }
    
    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
    }

    render() {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        const form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                element={formElement.config.element}
                label={formElement.config.label}
                type={formElement.config.type}
                value={formElement.config.value}
                touched={formElement.config.touched}
                onChange={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Sign in</div>
                    <div className="card-body">
                        <form onSubmit={this.submitHandler}>
                            {form}
                            <a className="btn btn-secondary btn-block" href="index.html">Login</a>
                        </form>
                        <div className="text-center">
                            <Link to='/signup' className="d-block small mt-3">Register an Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};

export default connect(null, mapDispatchToProps)(Login);