import React, { Component } from 'react';
import Input from '../../components/UI/Input';
import Layout from '../../components/UI/layout/Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Modal from '../modal/Modal';

class Edit extends Component {
    state = {
        editEvent: {
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
                value: '2019-09-20 12AM',
                touched: false
            },
            eventEnd: {
                element: 'input',
                label: 'End',
                type: 'datepicker',
                value: '2019-09-20 12AM',
                touched: false
            },
            picture: {
                element: 'input',
                label: 'Picture',
                type: 'text',
                value: '',
                touched: false
            }
        },
        modalOpen: false,
        eventId: this.props.match.params.id
    }

    inputChangedHandler = (event, controlName) => {
        const updateEvent = {
            ...this.state.editEvent,
            [controlName]: {
                ...this.state.editEvent[controlName],
                value: event.target.value,
                touched: true
            }
        };
        this.setState({editEvent: updateEvent});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onUpdate(
            this.state.editEvent.name.value,
            this.state.editEvent.description.value,
            this.state.editEvent.eventStart.value,
            this.state.editEvent.eventEnd.value,
            this.state.editEvent.picture,
            this.state.eventId,
            localStorage.getItem("token"),
            localStorage.getItem("client"),
            localStorage.getItem("uid")
        )
    }

    render() {
        const formElementsArray = [];
        for ( let key in this.state.editEvent ) {
            formElementsArray.push( {
                id: key,
                config: this.state.editEvent[key]
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
        console.log(this.props.message)
        if (this.props.message !== null){
            modal = <Modal message={this.props.message} open={true}/>
        }

        return (
            <Layout>
                {modal}
                <div className="container">
                    <div className="card card-login mx-auto mt-5 mb-3">
                        <div className="card-header">Edit event</div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                {form}
                                <button className="btn btn-secondary btn-block">Update</button>
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
    return {
        message: state.crud.messageUpdate,
        userId: state.auth.userId,
        token: state.auth.token,
        client: state.auth.client,
        uid: state.auth.uid
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdate: (name, description, eventStart, eventEnd, picture, eventId, token, client, uid) => dispatch(actions.updateEvent(name, description, eventStart, eventEnd, picture, eventId, token, client, uid)),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Edit);