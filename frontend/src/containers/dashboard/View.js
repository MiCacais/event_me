import React, { Component } from "react";
import Layout from '../../components/UI/layout/Layout';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
 
class View extends Component {
  state = {
    selectedEp: this.props.match.params.id,
    list: []
  };
 
  render() {
    console.log(this.state.selectedEp)
    return (
        <Layout>
          
            <Card name="Event1" description="This is a nice event" event_start="September 20, 10AM" event_end="September 20, 12:30AM" picture=""/>
            <Link to='/dashboard' className="btn btn-secondary mt-3">
                Back to dashboard
            </Link>
        </Layout>
    );
  }
}

export default View;