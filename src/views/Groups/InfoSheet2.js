import React, { Component } from 'react'
import { Badge, Button, Input, Modal, ModalBody, 
          ModalFooter, ModalHeader, Col, Row, Form, FormGroup, 
          Label,ListGroup, ListGroupItem, } from 'reactstrap';
import UserData from './tsconfig.json';
import Select from 'react-select';

var avail_friends = [];
UserData.forEach((friend, index) => {
  avail_friends.push({value: friend.name, label: friend.name})
}) // Contact Info; Need to filter out the names already in the group



export class InfoSheet extends Component {
  constructor(props) {
    super(props);
    this.togglemodal = this.togglemodal.bind(this);
    this.togglesubmit = this.togglesubmit.bind(this);
    this.renderMembers = this.renderMembers.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
    this.handleAddMem = this.handleAddMem.bind(this);
    this.handleDelMem = this.handleDelMem.bind(this);
    this.handleDelEvt = this.handleDelEvt.bind(this);
    this.onEventChange = this.onEventChange.bind(this);
    this.addEvent = this.addEvent.bind(this); 
    this.mountEventlist = this.mountEventlist.bind(this);
    this.onChange = this.onChange.bind(this);
    this.delGroup = this.delGroup.bind(this);

    this.state = {
      modal: false,
      groupInfo: this.props.info, // Group Info
      selectedOptionAdd:null,
      selectedOptionDel:null,
      selectedEvent:null,
      newEvents: [{name:"", date:"", notes:""}],
      Events: this.props.info.Events,
      name: this.props.info.name,
      GroupName: this.props.info.GroupName,
      id: this.props.id
    };
  }

  componentDidUpdate(){
    if(this.state.groupInfo !== this.props.info){
      this.setState({
        groupInfo: this.props.info,
        Events: this.props.info.Events,
        name: this.props.info.name,
        GroupName: this.props.info.GroupName,
        id: this.props.id
      })
    }
  }

  //For group deletion
  delGroup(){
    const deleteGroupInfo = this.props.deleteGroupInfo;
    deleteGroupInfo(this.state.id);
  }

  //For Group card creation
  togglesubmit(){
    let delnames = [];
    if (!(this.state.selectedOptionDel===null)){
    this.state.selectedOptionDel.forEach((nameObj)=>{
      delnames.push(nameObj.value)
    })};
    let namelist = [];
    this.state.name.forEach((nameObj)=>{
      if(!(delnames.includes(nameObj))){
        namelist.push(nameObj)
      }
    });
    if (!(this.state.selectedOptionAdd===null)){
    this.state.selectedOptionAdd.forEach((nameObj)=>{
      namelist.push(nameObj.value)
    })};

    let delevents = [];
    if (!(this.state.selectedEvent===null)){
    this.state.selectedEvent.forEach((eventObj)=>{
      delevents.push(eventObj.value)
    })};
    let eventlist = [];
    console.log(this.state.Events);
    [...this.state.Events].forEach((event)=>{
      if (!(delevents.includes(event.EventName)))
      { eventlist.push({
        EventName:event.EventName, 
        EventDate:event.EventDate, 
        EventNote:event.EventNote
      })}
    });
    [...this.state.newEvents].forEach((event)=>{
      if (!(event.name === '' || event.date === '' || event.note === '' )){
      eventlist.push({
        EventName:event.name, 
        EventDate:event.date, 
        EventNote:event.notes
      })}
    })
    const updateGroupInfo = this.props.updateGroupInfo;
    const info = {
      Events: eventlist,
      name: namelist,
      GroupName: this.state.GroupName,
    }
    console.log(info)
    if (this.state.modal){
      this.setState({
        selectedOptionAdd:null,
        selectedOptionDel:null,
        selectedEvent:null,
        newEvents: [{name:"", date:"", notes:""}],
        Events: this.props.info.Events,
        name: this.props.info.name,
        GroupName: this.props.info.GroupName,
      })
      updateGroupInfo(info, this.state.id)
    }
    this.setState({
      modal: !this.state.modal,
    });
  }
  

  //For New Contact Submission Modal
  togglemodal() {
    if (this.state.modal){
      this.setState({
        selectedOptionAdd:null,
        selectedOptionDel:null,
        selectedEvent:null,
        newEvents: [{name:"", date:"", notes:""}],
        Events: this.props.info.Events,
        name: this.props.info.name,
        GroupName: this.props.info.GroupName,
      })
    }
    this.setState({
      modal: !this.state.modal,
    });
  }
  // Value inputs
  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  // Display Members
  renderMembers(){
    let {name} = this.state.groupInfo;
    return name.map((member, index) => {
      return (
        <option value={index} key={index}>{`${index+1}. ${member}` }</option>
        )
      })
   }
   // Display Events
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

  // Add Member
  handleAddMem = selectedOptionAdd => {
    this.setState({ selectedOptionAdd });
    console.log(`Option selected:`, selectedOptionAdd);
  };


  // Delete Member
  handleDelMem = selectedOptionDel => {
    this.setState({ selectedOptionDel });
    console.log(`Option selected:`, selectedOptionDel);
  };

  // Delete Event
  handleDelEvt = selectedEvent => {
    this.setState({ selectedEvent });
    console.log(`Option selected:`, selectedEvent);
  };

  // Add Events
  onEventChange(e){
    {let eventlist = [...this.state.newEvents];
     eventlist[e.target.dataset.id][e.target.name] = e.target.value
     this.setState({ newEvents: eventlist }, () => console.log(this.state.newEvents))}
  }

  addEvent = (e) => {
    this.setState((prevState) => ({
      newEvents: [...prevState.newEvents, {name:"", date:"", notes: ""}],
    }));

  }

  mountEventlist(){
    let eventlist = this.state.newEvents;
    return eventlist.map((value, index)=> {
        let nameId = `name-${index}`, dateId = `date-${index}`, noteId = `note-${index}`;
        return (
          <FormGroup row id={index} key={index}>
            <Col xs='1' className=" mr-1 pr-0 pt-1 "><Badge color = 'primary' htmlFor={nameId} className='event_label'>{`#${index + 1}`}</Badge></Col>
            <Col xs="12" md="5" className=" ml-1 pl-0 mr-2 pr-0">
              <Input
                type="text"
                name="name"
                data-id={index}
                id={nameId}
                value={eventlist[index].name} 
                className="name"
                placeholder = "Event Name"
                onChange={this.onEventChange}
              />
            </Col>
            <Col xs="5" className='ml-0 pl-0'>
              {/* <Label htmlFor={dateId}>Date</Label> */}
              <Input
                type="date"
                name='date'
                data-id={index}
                id={dateId}
                value={eventlist[index].date} 
                className="date"
                placeholder = "Event Date"
                onChange={this.onEventChange}
              />
            </Col>
            <Col xs="11" className='ml-4 mt-1 pr-4'>
              <Input
                type="textarea" 
                name='notes'
                id={noteId}
                data-id={index}
                rows="2"
                value={eventlist[index].notes} 
                className='notes'
                placeholder="Additional Notes..." 
                onChange={this.onEventChange}
              />
            </Col>
           
          </FormGroup>
        );
      })
    };


    render() {
        var curr_members = [];
        this.props.info.name.forEach((member, index) => {
          curr_members.push({value: member, label: member})
        })

        var curr_events = [];
        this.props.info.Events.forEach((Event, index) =>{
          curr_events.push({value: Event.EventName, label: Event.EventName})
        })

        return (
          <div className='mr-1'>
            <Button onClick={this.delGroup} outline className='card-header-action' id='modalbtn'><i className="fa fa-trash"></i></Button>
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
                            <Input type="text" id="Groupname" name="GroupName" placeholder="required" 
                                  value={this.state.GroupName} onChange={this.onChange} required/> {/* Edit OnChange here to enable text editing */}
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
                    <h5 className='ml-1 mb-3'>
                      <i className='fa fa-user'></i>&nbsp; <ins> Add New Members</ins> 
                      <small className='text-muted'>&nbsp; (choose at least 2 people to form a group)</small>
                    </h5>
                    <Row className='mb-5'>
                      <Col xs="11" md="11" className=" add_member">
                        <Select value={this.state.selectedOptionAdd} onChange={this.handleAddMem} options={avail_friends} isMulti/>
                      </Col>        
                    </Row>
                    <h5 className='ml-1 mb-3'><ins>Delete Current Members</ins></h5>
                    <Row className='mb-5'>
                      <Col xs="11" md="11" className=" add_member">
                        <Select value={this.state.selectedOptionDel} onChange={this.handleDelMem} options={curr_members} isMulti/>
                      </Col>        
                    </Row>
                    <h5 className='ml-1'><ins>Add New Events</ins> <Button onClick={this.addEvent} className='add_item_btn'><i className="fa fa-plus-circle pt-1 ml-5 pl-5" id='fa-pin'></i>&nbsp; Add Another</Button></h5>
                    <Row className=' mb-1'>
                      <Col xs="12" md="12" className=" ml-3 pl-0">
                        <Form>
                          {this.mountEventlist()}
                        </Form>
                      </Col>        
                    </Row>
                    <h5 className='ml-1'><ins>Delete Events</ins> </h5>
                    <Row className=' mb-2 ml-1 mt-0 pt-0'><span className='text-muted pl-1 amount'>Choose the Event Title to delete</span></Row>
                    <Row className='mb-1'>
                      <Col xs="11" md="11" className=" add_member">
                        <Select value={this.state.selectedEvent} onChange={this.handleDelEvt} options={curr_events} isMulti/>
                      </Col>        
                    </Row>
                  </Col>
                </Row>
                
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.togglesubmit}>Update</Button>{' '}
                <Button color="secondary" onClick={this.togglemodal}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
    }
}

export default InfoSheet
