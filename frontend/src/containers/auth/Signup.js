import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import Input from '../../components/UI/Input';

class Signup extends Component {
    state = {
        controls: {
            name: {
                element: 'input',
                label: 'Name',
                type: 'text',
                value: '',
                touched: false
            },
            lastName: {
                element: 'input',
                label: 'Las name',
                type: 'text',
                value: '',
                touched: false
            },
            email: {
                element: 'input',
                label: 'Email',
                type: 'text',
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
        },
        isSignUp: true
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
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                touched={formElement.config.touched}
                onChange={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Sign up</div>
                    <div className="card-body">
                        <form onSubmit={this.submitHandler}>
                            {form}
                            <a className="btn btn-secondary btn-block" href="index.html">Sign up</a>
                        </form>
                        <div className="text-center">
                            <Link to='/login' className="d-block small mt-3">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;