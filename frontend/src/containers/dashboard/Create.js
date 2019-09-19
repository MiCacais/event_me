import React, { Component } from 'react';
import Input from '../../components/UI/Input';
import Layout from '../../components/UI/layout/Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Modal from '../modal/Modal';

class Create extends Component {
    state = {
        newEvent: {
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
                type: 'textarea',
                value: '',
                touched: false
            },
            eventStart: {
                element: 'input',
                label: 'Start',
                type: 'datepicker',
                value: 'September 19, 2019 2:26 PM',
                touched: false
            },
            eventEnd: {
                element: 'input',
                label: 'End',
                type: 'datepicker',
                value: 'September 19, 2019 2:26 PM',
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

    inputChangedHandler = (event, eventName) => {
        const updateEvent = {
            ...this.state.newEvent,
            [eventName]: {
                ...this.state.newEvent[eventName],
                value: event.target.value,
                touched: true
            }
        };
        this.setState({newEvent: updateEvent});
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.newEvent.eventStart.value)
        this.props.onCreate(
            this.state.newEvent.name.value,
            this.state.newEvent.description.value,
            this.state.newEvent.eventStart.value,
            this.state.newEvent.eventEnd.value,
            this.state.newEvent.picture.value,
            localStorage.getItem("userId"),
            localStorage.getItem("token"),
            localStorage.getItem("client"),
            localStorage.getItem("uid")
        )
    }

    render() {
        const formElementsArray = [];
        for ( let key in this.state.newEvent ) {
            formElementsArray.push( {
                id: key,
                config: this.state.newEvent[key]
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

        let modal = <Modal message='' open={false}/>
        if (this.props.message !== null){
            modal = <Modal message={this.props.message} open={true}/>
        }

        return (
            <Layout>
                {modal}
                <div className="container">
                    <div className="card card-login mx-auto mt-5 mb-5">
                        <div className="card-header">New event</div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                {form}
                                <button className="btn btn-secondary btn-block">Create</button>
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

const mapStateToProps = state => {
    console.log(state.crud.message)
    return {
        message: state.crud.message,
        userId: state.auth.userId,
        token: state.auth.token,
        client: state.auth.client,
        uid: state.auth.uid
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreate: (name, description, eventStart, eventEnd,picture, userId, token, client, uid) => dispatch(actions.craeteEvent(name, description, eventStart, eventEnd, picture, userId, token, client, uid)),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Create);