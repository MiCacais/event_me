import React, { Component } from 'react';
import ReactModal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
 
class Modal extends Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    return (
      <div>
        <ReactModal open={this.props.open} onClose={this.onCloseModal} >
          <h3>{this.props.message}</h3>
          <Link to='/dashboard' className="btn btn-secondary btn-lg btn-block mt-3">Back to dashboard</Link>
        </ReactModal>
      </div>
    );
  }
}
 
export default Modal;