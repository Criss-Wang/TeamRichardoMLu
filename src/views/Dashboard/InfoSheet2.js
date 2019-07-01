import React, { Component } from 'react';
import { Badge, Button, Input, Modal, ModalBody, 
          ModalFooter, ModalHeader, Col, Row, Form, FormGroup, Label} from 'reactstrap';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export class InfoSheet extends Component {
  constructor(props) {
    super(props);
    this.togglemodal = this.togglemodal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addTag = this.addTag.bind(this);
    this.mountTaglist = this.mountTaglist.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.togglesubmit = this.togglesubmit.bind(this);
    this.onRadio = this.onRadio.bind(this);
    this.TagDisplay = this.TagDisplay.bind(this);

    this.state = {
      modal: false,
      uploadedFile: null,
      // Infos
      firstName: '',
      lastName: '',
      nickName:'',
      sex: '',
      birthday: '',
      Department: '',
      Major: '',
      YOS: '',
      Tags: '',
      Phone: '',
      Email: '',
      Residence: '',
      Social_Contact_type: '',
      Social_Contact_account:'',
      BM_date:'',
      BM_name: '',
      note: '',
      img: '',
      newTags: ['',]
    };
  }
  // Sync the parent's states
  componentDidMount(){
    this.setState({
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      nickName: this.props.nickName,
      sex: this.props.sex,
      Major: this.props.Major,
      YOS: this.props.YOS,
      Tags: this.props.Tags,
      img: this.props.img,
    })
  }

  //Delete Tags function
  delTags(i){
    if (i >= this.state.Tags.length){
      this.setState({
        newTags:[...this.state.newTags.filter(tag => this.state.newTags.indexOf(tag) !== (i-this.state.Tags.length))]
      })
    } else {
      this.setState({
        Tags:[...this.state.Tags.filter(tag => this.state.Tags.indexOf(tag) !== i)]
      })
    }
  }
  //sex check default is male
  onRadio(){
    if (this.state.sex === 'Male') {
      return true
    } else {
      return false
    }
  }
  // Value inputs
  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  // for form submission
  togglesubmit(){
    console.log(this.state.birthday)
    const getSelfInfo = this.props.getSelfInfo;
    const info = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      nickName: this.state.nickName,
      sex: this.state.sex,
      Major: this.state.Major,
      YOS: this.state.YOS,
      Tags: this.state.Tags.concat(this.state.newTags),
      img: this.state.img,
    }
    if (this.state.modal){
      this.setState({
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        nickName: this.props.nickName,
        sex: this.props.sex,
        birthday: '',
        Department: '',
        Major: this.props.Major,
        YOS: this.props.YOS,
        Tags: this.props.Tags,
        Phone: '',
        Email: '',
        Residence: '',
        Social_Contact_type: '',
        Social_Contact_account:'',
        BM_date:'',
        BM_name: '',
        note: '',
        img: this.props.img,
        newTags: ['',]
      })
      getSelfInfo(info)
    }
    this.setState({
      modal: !this.state.modal,
    });
  }
  
  //For New Contact Submission Modal
  togglemodal() {
    if (this.state.modal){
      this.setState({
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        nickName: this.props.nickName,
        sex: this.props.sex,
        birthday: '',
        Department: '',
        Major: this.props.Major,
        YOS: this.props.YOS,
        Tags: this.props.Tags,
        Phone: '',
        Email: '',
        Residence: '',
        Social_Contact_type: '',
        Social_Contact_account:'',
        BM_date:'',
        BM_name: '',
        note: '',
        img: this.props.img,
        newTags: ['a',]
      })
    }
    this.setState({
      modal: !this.state.modal,
    });
  }
  // For tag additions
  addTag = (e) => {
    this.setState((prevState) => ({
      newTags: [...prevState.newTags, ""],
    }));

  }

  handleAddTag = (e) => {
      let taglist = [...this.state.newTags]
      taglist[e.target.id] = e.target.value
      this.setState({ newTags: taglist }, () => console.log(this.state.newTags))
  }

  mountTaglist(){
    let taglist = this.state.newTags;
    return taglist.map((tag, index)=> {
        return (
          <FormGroup row id={index} key={index}>
            <Col xs='1' className=" mr-2 pr-0 pt-1 mt-1"><Badge color = 'primary' htmlFor={tag} className='event_label'>{`#${index + 1}`}</Badge></Col>
            <Col xs="12" md="10" className=" ml-1 pl-0 mr-2 pr-0">
              <Input
                type="text"
                name='new_tag'
                data-id={index}
                id={index}
                value={taglist[index]} 
                className='tags'
                placeholder = "New Tag"
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
    )}
  )}
  
  TagDisplay(){
    let {Tags, newTags} = this.state;
    let displayed = [...Tags].concat([...newTags]);
    return [...displayed].map((tag, index) => {
      return (
        <Badge key={index}className="mr-1" color="primary"><span>{tag} </span>&nbsp;<Button className='cancel' onClick={this.delTags.bind(this, index)}><i className='fa fa-times'></i></Button></Badge>
      )
    })
  }

  render() {
      return (
        <span>
          {/* Button to open the modal */}
          <Button onClick={this.togglemodal} outline className='card-header-action' id='modalbtn'><i className="fa fa-pencil"></i></Button>
          {/* Modal body */}
          <Modal isOpen={this.state.modal} toggle={this.togglemodal} className={'modal-lg modal-primary '+ this.props.className} id='modalCenter'>
            <ModalHeader toggle={this.togglemodal} className='pt-2 mt-0 pb-2 mb-0'>
              <strong className='modal-title'>Friend Info Sheet</strong>
              <small> Editing</small>
            </ModalHeader>
            <ModalBody>
              <Row>
                {/* Left side: Personal Info */}
                <Col lg='6' xs='6'  className='pl-4 pr-3'>
                  <h5 className='ml-1'><ins>Personal</ins></h5>
                  <Row className='pb-0 mb-0'>
                    <Col md='9'>
                    <Form method="post" encType="multipart/form-data" className="form-horizontal">
                        <FormGroup row>
                        <Col md="5" className="mt-1 ">
                          <Label htmlFor="Firstname"><i className="fa fa-id-card-o"></i> First Name</Label>
                        </Col>
                        <Col xs="12" md="7" className=" ml-0 pl-0">
                          <Input type="text" id="Firstname" name="firstName" placeholder="Required*" value={this.state.firstName}
                              onChange={this.onChange} required/>
                        </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Col md="5" className=" mr-0 mt-1">
                          <Label htmlFor='Lastname'><i className="fa fa-id-card-o"></i> Last Name</Label>
                        </Col>
                        <Col xs="12" md="7" className=" ml-0 pl-0">
                          <Input type="text" id="Lastname" name="lastName" placeholder="Required*" value={this.state.lastName}
                                  onChange={this.onChange} required/>
                        </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Col md="5" className="mt-1" >
                          <Label htmlFor="nickname"><i className="fa fa-id-card-o"></i> Nickname</Label>
                        </Col>
                        <Col xs="12" md="7" className=" ml-0 pl-0">
                          <Input type="text" id="nickname" name="nickName" placeholder="" value={this.state.nickName}
                                  onChange={this.onChange}/>
                        </Col>
                        </FormGroup>
                      </Form>
                    </Col>
                    {/*Image Uploading */}
                    <Col md='3' className='text-center mt-3'>
                        <img src={this.state.img ? this.state.img : '../../assets/img/avatars/6.jpg'} className="img-avatar mb-3" alt="admin@bootstrapmaster.com" />
                        <Input type='file' className='inputhere' onChange={this.onChange}/>
                    </Col>
                  </Row>
                  {/*Sex and Birthday */}
                  <Row className='mt-1'>
                    <Col md='3'>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="sex" value="Male" onChange = {this.onChange} checked={this.onRadio()}/>
                        <Label className="form-check-label" check htmlFor="inline-radio1">Male</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio2" name="sex" value="Female" onChange = {this.onChange} checked={!this.onRadio()}/>
                        <Label className="form-check-label" check htmlFor="inline-radio2">Female</Label>
                      </FormGroup>
                    </Col>
                    <Col md='9'>
                      <FormGroup row>
                        <Col md="4" className='mt-2 mr-0 pr-0'>
                          <Label htmlFor="date-input"><i className="fa fa-birthday-cake "></i> Birthday </Label>
                        </Col>
                        <Col xs="12" md="8" className='pl-0 ml-0'>
                          <Input type="date" id="date-input" name="birthday" placeholder="Enter Birthday" value={this.state.birthday} 
                          onChange={this.onChange}/>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className='mt-0 pt-0'/>
                  <h6 className='ml-1'><ins>Academics</ins></h6>
                  {/*Academic Info */}
                  <Row className='pb-0 mb-0'>
                    <Col>
                      <FormGroup row>
                        <Col md="4"  className='mt-2 pl-3'>
                          <Label htmlFor="select"><i className="fa fa-institution"></i> Department</Label>
                        </Col>
                        <Col xs="12" md="8" className=" ml-0 pl-0">
                          <Input type="select" name="Department" id="select" value={this.state.Department} onChange={this.onChange}>
                            <option value="">Please select</option>
                            <option value="School of Computing">School of Computing</option>
                            <option value="Math Department">Math Department</option>
                            <option value="School of Art and Social Science">School of Art and Social Science</option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="4"  className='mt-2 pl-3'>
                          <Label htmlFor="select"><i className="fa fa-book"></i>  Major</Label>
                        </Col>
                        <Col xs="12" md="8" className=" ml-0 pl-0">
                          <Input type="select" name="Major" id="select" value={this.state.Major} onChange={this.onChange}>
                            <option value="">Please select</option>
                            <option value="Applied Mathematics">Applied Mathematics</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Computer Engineering">Computer Engineering</option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="5"  className='mt-2 pl-3'>
                          <Label htmlFor="select"><i className="fa fa-graduation-cap"></i> Year of Study/Title</Label>
                        </Col>
                        <Col xs="12" md="7" className=" ml-0 pl-0">
                          <Input type="select" name="YOS" id="select" value={this.state.YOS} onChange={this.onChange}>
                            <option value="">Please select</option>
                            <option value="Undergrad-Year1">Undergrad-Year1</option>
                            <option value="Undergrad-Year2">Undergrad-Year2</option>
                            <option value="Undergrad-Year3">Undergrad-Year3</option>
                            <option value="Undergrad-Year4">Undergrad-Year4</option>
                          </Input>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className='mt-0 pt-0'/>
                  <h6 className='ml-1'><ins>Interest {' & '} Favourites {' & '} Other Tags</ins></h6>
                  {/*Tags Edit*/}
                  <div className='ml-1 mb-1 pb-0'>
                      {this.TagDisplay()}
                  </div>
                  <Row className='mt-0 pt-0'>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccmonth"><Button onClick={this.addTag} className='add_item_btn ml-0 pl-1'><i className="fa fa-plus-circle" id='fa-pin'></i>&nbsp; Add Tags Here</Button></Label>
                      <Form onChange={this.handleAddTag}>
                        {this.mountTaglist()}
                      </Form>
                    </FormGroup>
                  </Col>
                </Row>
                </Col>
                <Col lg='6'>
                  <h5 className='ml-1'><ins>Contacts</ins></h5>
                  {/*Contacts*/}
                  <Row className='mb-1'>
                    <Col>
                      <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                        <FormGroup row>
                        <Col md="3" className="pr-1 mt-1">
                          <Label htmlFor="Phone"><i className="fa fa-phone"></i> Phone</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="Phone" name="Phone" placeholder="" value={this.state.Phone}
                                  onChange={this.onChange} />
                        </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Col md="3" className="pr-1 mt-1">
                          <Label htmlFor="Email"><i className="fa fa-envelope"></i> Email</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="Email" name="Email" placeholder="" value={this.state.Email}
                                  onChange={this.onChange} />
                        </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Col md="3" className="pr-1 mt-1" >
                          <Label htmlFor="Residence"><i className="fa fa-building"></i> Residence</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="Residence" name="Residence" placeholder="" value={this.state.Residence}
                                  onChange={this.onChange}/>
                        </Col>
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                  <hr className='mt-0 pt-0'/>
                  <h6 className='ml-1'><ins>Social contacts</ins></h6>
                  {/*Social Contacts*/}
                  <Row>
                  <Col xs="5">
                    <FormGroup>
                      <Label htmlFor="ccmonth"><i className="fa fa-feed"></i> Channel</Label>
                      <Input type="select" name="Social_Contact_type" id="select" value={this.state.Social_Contact_type} onChange={this.onChange}>
                        <option value="">Select</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Linkedin">Linkedin</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="7">
                    <FormGroup>
                      <Label htmlFor="ccyear"><i className="fa fa-user"></i> Account</Label>
                      <Input type="text" id="Account" name="Social_Contact_account" value={this.state.Social_Contact_account} onChange={this.onChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <hr className='mt-0 pt-0'/>
                <h6 className='ml-1 pb-2'><ins>Best Memories</ins></h6>
                {/*Best Memories*/}
                <Row>
                  <Col>
                  <FormGroup row>
                      <Col xs="1"><i className="fa fa-plus-circle pt-2 mr-0" id='fa-pin'></i> </Col>
                    <Col xs="12" md="5" className=" ml-0 pl-0">
                      <Input type="date" id="date-input" name="BM_date" placeholder="date" value={this.state.BM_date} onChange={this.onChange}/>
                    </Col>
                    <Col xs="6" >
                      <FormGroup>
                        <Input type="text" id="text-input" name="BM_name" placeholder="Event name" value={this.state.BM_name} onChange={this.onChange}/>
                      </FormGroup>
                  </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3"  className="mr-0 pr-0">
                    
                      <Label htmlFor="textarea-input"><i className="fa fa-thumb-tack"></i> Additional Notes</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="note" id="textarea-input" rows="4"
                            placeholder="Add other details here" value={this.state.note} onChange={this.onChange}/>
                    </Col>
                  </FormGroup>
                  </Col>                    
                </Row>
                </Col>
              </Row>
              
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.togglesubmit}>Add</Button>{' '}
              <Button color="secondary" onClick={this.togglemodal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </span>
      )
  }
}

export default InfoSheet
