import React, { Component } from 'react'
import { Badge, Button, Input, Modal, ModalBody, 
          ModalFooter, ModalHeader, Col, Row, Form, FormGroup, 
          Label,ListGroup, ListGroupItem, } from 'reactstrap';
import UserData from './tsconfig.json';
import Select from 'react-select';

var options = [];
UserData.forEach((friend, index) => {
  options.push({value: friend.name, label: friend.name})
}) // Contact Info

export class InfoSheet extends Component {
  constructor(props) {
    super(props);
    this.togglemodal = this.togglemodal.bind(this);
    this.renderMembers = this.renderMembers.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
    this.handleAddMem = this.handleAddMem.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.addEvent = this.addEvent.bind(this); 
    this.mountEventlist = this.mountEventlist.bind(this);
    this.state = {
      modal: false,
      groupInfo: this.props.info, // Group Info
      selectedOption:null,
      newEvents: [{name:"", date:"", notes:""}]
    };
  }
  
  //For New Contact Submission Modal
  togglemodal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  renderMembers(){
    let {name} = this.state.groupInfo;
    return name.map((member, index) => {
      return (
        <option value={index} key={index}>{`${index+1}. ${member}` }</option>
        )
      })
   }

   renderEvents(){
    let {Events} = this.state.groupInfo;
    return Events.map((event, index) =>{
      return (
        <ListGroupItem key={index} action tag="a"className=" list-group-item-accent-info mt-0 mb-0 pt-1 pb-1 mr-0 pr-0">
          <div className='mb-0 pb-0 mr-0 pr-0'>
            <strong> {`${index+1}. ${event.EventName}`}</strong> &nbsp;
            <small className="text-muted mr-3 event_date mt-1">
              <i className="icon-calendar"></i>&nbsp; {event.EventDate}
            </small>
          </div>
          <div className='mb-0 pb-0 mr-0 pr-0'> 
          <small className= "mt-1 ml-3">{event.EventNote}</small>
          </div>
        </ListGroupItem>
      )
    })
   }

  handleAddMem = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleAddEvent = (e) => {
    if (["name", "date", "note"].includes(e.target.className) ) {
      let eventlist = [...this.state.newEvents]
      eventlist[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ newEvents: eventlist }, () => console.log(this.state.newEvents))
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  addEvent = (e) => {
    this.setState((prevState) => ({
      newEvents: [...prevState.newEvents, {name:"", date:""}],
    }));

  }

  mountEventlist(){
    let eventlist = this.state.newEvents;
    return eventlist.map((value, index)=> {
        let nameId = `name-${index}`, dateId = `date-${index}`, noteId = `note-${index}`;
        return (
          <FormGroup row id={index} key={index}>
            <Col xs='1' className=" mr-0 pr-0 pt-1 "><Label htmlFor={nameId} className='event_label'>{`#${index + 1}`}</Label></Col>
            <Col xs="12" md="5" className=" ml-1 pl-0 mr-2 pr-0">
              <Input
                type="text"
                name={nameId}
                data-id={index}
                id={nameId}
                value={eventlist[index].name} 
                className="name"
                placeholder = "Event Name"
              />
            </Col>
            <Col xs="5" className='ml-0 pl-0'>
              {/* <Label htmlFor={dateId}>Date</Label> */}
              <Input
                type="date"
                name={dateId}
                data-id={index}
                id={dateId}
                value={eventlist[index].date} 
                className="date"
                placeholder = "Event Date"
              />
            </Col>
            <Col xs="11" className='ml-4 mt-1 pr-4'>
              <Input type="textarea" 
                    name="textarea-input" 
                    id={noteId}
                    data-id={index}
                    rows="2"
                    value={eventlist[index].note} 
                    className='note'
                    placeholder="Additional Notes..." />
            </Col>
           
          </FormGroup>
        );
      })
    };


    render() {
        return (
          <div className='float-right mr-1'>
            <Button onClick={this.togglemodal} outline className='card-header-action' id='modalbtn'><i className="fa fa-arrow-right"></i></Button>
            <Modal isOpen={this.state.modal} toggle={this.togglemodal} className={'modal-lg modal-primary '+ this.props.className} id='modalCenter'>
              <ModalHeader toggle={this.togglemodal} className='pt-2 mt-0 pb-2 mb-0'>
                <strong className='modal-title'>Groups Info Sheet</strong>
                <small> Editing</small>
              </ModalHeader>
              <ModalBody>
                <Row>
                  
                  <Col lg='6' xs='6'  className='pl-4 pr-3'>
                    <h5 className='ml-1'><ins>Group Details</ins></h5>
                    <Row className='mt-3 mb-0 pb-0'>
                      <Col>
                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                          <FormGroup row>
                          <Col md="4" className="mt-1 mr-0 pr-0">
                            <Label htmlFor="Firstname"><i className="fa fa-group mr-1"></i> Group Name</Label>
                          </Col>
                          <Col xs="12" md="8" className=" ml-0 pl-0">
                            <Input type="text" id="Firstname" name="text-input" placeholder="required" 
                                  value={this.state.groupInfo.GroupName} onChange='' required/> {/* Edit OnChange here to enable text editing */}
                          </Col>
                          </FormGroup>
                        </Form>
                      </Col>  
                    </Row>
                    <hr className='mt-0 pt-0 mb-0 pb-0'/>
                    <Row className=' mt-0 pt-0 pb-0 mb-0'>
                        <Col className='text-center'>
                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                          <FormGroup row>
                          <Col md="12" className="mt-1 mr-0 pr-0 text-left">
                            <Label htmlFor="Firstname"><i className="fa fa-address-book mr-1"></i> Group Members<Badge className=" float-right mt-1 ml-2 text-center" color="primary" size='sm'>{this.state.groupInfo.name.length}</Badge> </Label>
                          </Col>
                          <Col xs="12" md="12" className=" ml-3 pl-0 pr-4">
                            <Input type="select" name="multiple-select" id="multiple-select" multiple className='MemberList'>
                              {this.renderMembers()}
                            </Input>
                          </Col>
                          </FormGroup>
                        </Form>
                          
                        </Col>
                    </Row>
                    <hr className='mt-0 pt-0'/>
                    <h5 className='ml-1'><ins>Past Events</ins></h5>
                    <Row className='pb-0 mb-0'>
                    
                      <Col>
                      <Label htmlFor="Event List"><i className='fa fa-list'></i>&nbsp; Event List <Badge className=" float-right mt-1 ml-2 text-center" color="primary" size='sm'>{this.state.groupInfo.Events.length}</Badge> </Label>
                      <ListGroup className="mr-0 pr-0">
                        {this.renderEvents()}
                      </ListGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg='6'>
                    <h5 className='ml-1 mb-3'><ins>Add New Member</ins></h5>
                    <Row className='mb-5'>
                      <Col xs="11" md="11" className=" add_member">
                        <Select value={this.state.selectedOption} onChange={this.handleAddMem} options={options} isMulti/>
                      </Col>        
                    </Row>
                    <h5 className='ml-1'><ins>Add New Event</ins></h5>
                    <Row className=' mb-1'>
                      <Col xs="12" md="12" className=" ml-3 pl-0">
                        <Form onChange={this.handleAddEvent}>
                          <Col xs="5" className='ml-auto '><Button onClick={this.addEvent} className='add_item_btn'><i className="fa fa-plus-circle pt-2 mr-0" id='fa-pin'></i>&nbsp; Add Another </Button></Col>
                          {this.mountEventlist()}
                        </Form>
                      </Col>        
                    </Row>
                  </Col>
                </Row>
                
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.togglemodal}>Add</Button>{' '}
                <Button color="secondary" onClick={this.togglemodal}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
    }
}

export default InfoSheet
