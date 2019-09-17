import React, { Component } from 'react';
import Layout from '../../components/UI/layout/Layout';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
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
                                <tr>
                                    <td>Event1</td>
                                    <td>
                                        <i class="fa fa-eye"></i>
                                    </td>
                                    <td>
                                        <i class="fa fa-edit"></i>
                                    </td>
                                    <td>
                                        <i class="fa fa-times"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
      );
    }
}
  
export default Dashboard;