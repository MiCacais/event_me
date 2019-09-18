import React, { Component } from 'react';
import Layout from '../../components/UI/layout/Layout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/index';

class Dashboard extends Component {

    componentDidMount () {
        this.props.onFetchEvents(this.props.token);
    }

    render() {
        let events = [];
        if ( this.props.events ) {
            events = this.props.events.map( event => (
                <tr>
                    <td>
                        key={event.id}
                        name={event.name}
                    </td>
                    <td>
                        <Link to='/view'><i class="fa fa-eye"></i></Link>
                    </td>
                    <td>
                        <Link to='/edit'><i class="fa fa-edit"></i></Link>
                    </td>
                    <td>
                        <Link to='/edit'><i class="fa fa-times"></i></Link>
                    </td>
                </tr>
            ))
        }else{
            events = <tr><td>You don't have events</td>
                        <td><i class="fa fa-eye"></i></td>
                        <td><i class="fa fa-edit"></i></td>
                        <td><i class="fa fa-times"></i></td></tr>
        }
        return (
            <Layout>
                <Link to='/create' className="btn btn-outline-secondary btn-lg btn-block md-4 margin-bt-20">
                    <i className="fa fa-plus"></i> Add new event
                </Link>
                <div class="card mb-5">
                    <div class="card-header"><i class="fa fa-table"></i> My events</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
        events: state.events,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchEvents: (token) => dispatch( actions.fetchEvents(token) )
    };
};
  
export default connect( mapStateToProps, mapDispatchToProps )(Dashboard);