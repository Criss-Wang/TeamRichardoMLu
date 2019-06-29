import React, { Component } from 'react'
import {  Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export class InfoSheet extends Component {
  constructor(props) {
    super(props);
    this.toggleDelete= this.toggleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.DeleteRow = this.DeleteRow.bind(this);
    this.state = {
        delete: false,
        id: this.props.id,
    };
  }

  DeleteRow(){
    this.props.handleDelete(this.state)
  };

  /*
  delete() {
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
  */

  handleChange(){
    this.setState({
      delete: !this.state.delete,
    }, this.DeleteRow);
  };

  toggleDelete() {
    this.setState({
      delete: !this.state.delete,
    })
  };

  render() {
      return (
        <span>
          <Button  color='ghost-dark' onClick={this.toggleDelete} className='mr-1'><i className="fa fa-trash"></i> </Button>
        <Modal isOpen={this.state.delete} toggle={this.toggleDelete}
          className={'modal-danger delete' + this.props.className} id='modalCenter'>
          <ModalHeader toggle={this.toggleDelete}><i className='fa fa-warning mr-1' ></i> Warning</ModalHeader>
          <ModalBody className='modalbody'>
            <h5>Are You Sure to Delete this contact?</h5>
            This will remove <strong>All</strong> the information related to namehere
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.handleChange}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.toggleDelete}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </span>
      )
  }
}

export default InfoSheet
