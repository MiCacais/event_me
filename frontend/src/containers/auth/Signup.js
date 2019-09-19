import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import './Auth.css';
import Input from '../../components/UI/Input';

class Signup extends Component {
    state = {
        newAccount: {
            name: {
                element: 'input',
                label: 'Name',
                type: 'text',
                value: '',
                touched: false
            },
            lastName: {
                element: 'input',
                label: 'Last name',
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
    }

    componentDidMount(){
        document.body.classList.add('bg-dark');
        if (this.props.authRedirectPath !== '/'){
            this.props.onSetAuthRedirectPath();
        }
    }

    componentWillUnmount(){
        document.body.classList.remove('bg-dark'); 
    }
    
    inputChangedHandler = (event, name) => {
        const updatedNewAccount = {
            ...this.state.newAccount,
            [name]: {
                ...this.state.newAccount[name],
                value: event.target.value,
                touched: true
            }
        };
        this.setState({newAccount: updatedNewAccount});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSignUp(
            this.state.newAccount.name.value,
            this.state.newAccount.lastName.value,
            this.state.newAccount.email.value,
            this.state.newAccount.password.value
        );
    }

    render() {
        const formElementsArray = [];
        for ( let key in this.state.newAccount ) {
            formElementsArray.push( {
                id: key,
                config: this.state.newAccount[key]
            } );
        }

        const form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                element={formElement.config.element}
                label={formElement.config.label}
                type={formElement.config.type}
                value={formElement.config.value}
                touched={formElement.config.touched}
                onChange={(event) => this.inputChangedHandler(event, formElement.id)} />
        ) );

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to='/dashboard' />
        }

        return (
            <div className="container">
                {authRedirect}
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Sign up</div>
                    <div className="card-body">
                        <form onSubmit={this.submitHandler}>
                            {form}
                            <button className="btn btn-secondary btn-block">Sign up</button>
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

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (name, last_name, email, password) => dispatch(actions.signUp(name, last_name, email, password)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);