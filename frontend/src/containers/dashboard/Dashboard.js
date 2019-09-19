import React, { Component } from 'react';
import Layout from '../../components/UI/layout/Layout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/index';

class Dashboard extends Component {

    componentDidMount () {
        const token = localStorage.getItem("token");
        const client = localStorage.getItem("client");
        const uid = localStorage.getItem("uid");
        this.props.onFetchEvents( token, client, uid);
    }

    deleteEventHandler = () => {
        this.props.onDeleteEvent()
    }

    render() {
        let events = []
        if ( this.props.events ) {
            events = this.props.events.map(event => {
                return (
                    <tr>
                        <td>name={event.name}</td>
                        <td><Link to='/view'><i className="fa fa-eye"></i></Link></td>
                        <td><Link to='/edit'><i className="fa fa-edit"></i></Link></td>
                        <td><button><i className="fa fa-times"></i></button></td>
                    </tr>
                )
            })
        }else{
            events = <tr><td>You don't have events</td>
                    <td><i className="fa fa-eye"></i></td>
                    <td><i className="fa fa-edit"></i></td>
                    <td><i className="fa fa-times"></i></td></tr>
        }
        return (
            <Layout>
                <Link to='/create' className="btn btn-outline-secondary btn-lg btn-block md-4 margin-bt-20">
                    <i className="fa fa-plus"></i> Add new event
                </Link>
                <div className="card mb-5">
                    <div className="card-header"><i className="fa fa-table"></i> My events</div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">View</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { events }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.crud.events,
        userId: state.auth.userId,
        token: state.auth.token,
        client: state.auth.client,
        uid: state.auth.uid
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchEvents: (token, client, uid) => dispatch( actions.fetchEvents(token, client, uid) ),
        onDeleteEvent: (token, client, uid, eventId) => dispatch( actions.deleteEvent(token, client, uid, eventId) )
    };
};
  
export default connect( mapStateToProps, mapDispatchToProps )(Dashboard);