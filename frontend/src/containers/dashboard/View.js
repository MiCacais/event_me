import React, { Component } from "react";
import Layout from '../../components/UI/layout/Layout';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
 
class View extends Component {
  state = {
    eventId: this.props.match.params.id
  };

  componentDidMount () {
    const token = localStorage.getItem("token");
    const client = localStorage.getItem("client");
    const uid = localStorage.getItem("uid");
    this.props.onFetchEvent( this.state.eventId, token, client, uid);
  }
 
  render() {
    let event = []
      if ( this.props.event !== null && this.props.event !== '' ) {
        console.log(this.props.event)
        event = <Card name={this.props.event.name}
                      description={this.props.event.description}
                      event_start={this.props.event.event_start}
                      event_end={this.props.event.event_end}
                      picture={this.props.event.picture}
                />
    }

    return (
        <Layout>
          {event}
          <center>
            <Link to='/dashboard' className="btn btn-secondary mt-3 mx-auto center">
                Back to dashboard
            </Link>
            </center>
        </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
      event: state.crud.event,
      userId: state.auth.userId,
      token: state.auth.token,
      client: state.auth.client,
      uid: state.auth.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchEvent: (eventId, token, client, uid) => dispatch( actions.fetchEvent(eventId, token, client, uid) )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(View)