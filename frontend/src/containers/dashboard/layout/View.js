import React, { Component } from "react";
import Layout from './layout/Layout';
import Card from '../../../components/card/Card';
 
class View extends Component {
  state = {
    list = []
  };
 
  render() {
    return (
        <Layout>
            <Card name="Event1" description="This is a nice event" event_start="September 20, 10AM" event_end="September 20, 12:30AM" picture=""/>
        </Layout>
    );
  }
}

export default View;