import React, { Component } from 'react';
import Input from '../../components/UI/Input';
import Layout from './layout/Layout';
import { Link } from 'react-router-dom';

class Create extends Component {
    state = {
        new_event: {
            name: {
                element: 'input',
                label: 'Name',
                type: 'text',
                value: '',
                touched: false
            },
            description: {
                element: 'input',
                label: 'Description',
                type: 'text',
                value: '',
                touched: false
            },
            event_start: {
                element: 'input',
                label: 'Start',
                type: 'text',
                value: '',
                touched: false
            },
            event_end: {
                element: 'input',
                label: 'End',
                type: 'text',
                value: '',
                touched: false
            },
            picture: {
                element: 'input',
                label: 'Picture',
                type: 'text',
                value: '',
                touched: false
            }
        }
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
            <Layout>
                <div className="container">
                    <div className="card card-login mx-auto mt-5">
                        <div className="card-header">New event</div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                {form}
                                <a className="btn btn-secondary btn-block" href="index.html">Create</a>
                            </form>
                            <div className="text-center">
                                <Link to='/dashboard' className="d-block small mt-3">Back to dashboard</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
  
export default Create;