import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, 
         Button, Input, InputGroup, InputGroupAddon, InputGroupText, Popover, PopoverBody, PopoverHeader, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Col, Row, Form, FormGroup, Label} from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);

    this.togglepopover = this.togglepopover.bind(this);
    this.togglemodal = this.togglemodal.bind(this);
    this.state = {
      popoverOpen: false,
      modal: false,
    };
  }

  togglepopover() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  togglemodal() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />

        <Nav className="d-md-down-none" navbar>
          <NavItem className='ml-5'>
            <InputGroup className="input-prepend">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-search"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input size="40" type="text" placeholder="What are you looking for?" />
                <InputGroupAddon addonType="append">
                  <Button color="primary">Search</Button>
                </InputGroupAddon>
              </InputGroup>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button block outline size = 'sm' color='info' onClick={this.togglemodal} className="mr-1 add-btn">+ Add Contact</Button>
            <Modal isOpen={this.state.modal} toggle={this.togglemodal} className={'modal-lg modal-info '+ this.props.className} id='modalCenter'>
              <ModalHeader toggle={this.togglemodal}>
                <strong>Info Sheet</strong>
                <small> Editing</small>
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col lg='6' xs='6'  className='pl-4 pr-3'>
                    <h5 className='ml-1'><ins>Personal</ins></h5>
                    <Row className='pb-0 mb-0'>
                      <Col md='9'>
                      <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                          <FormGroup row>
                          <Col md="5" className="mt-1">
                            <Label htmlFor="Firstname"><i className="fa fa-id-card-o"></i> First Name</Label>
                          </Col>
                          <Col xs="12" md="7" className=" ml-0 pl-0">
                            <Input type="text" id="Firstname" name="text-input" placeholder="required" required/>
                          </Col>
                          </FormGroup>
                          <FormGroup row>
                          <Col md="5" className=" mr-0 mt-1">
                            <Label htmlFor='Lastname'><i className="fa fa-id-card-o"></i> Last Name</Label>
                          </Col>
                          <Col xs="12" md="7" className=" ml-0 pl-0">
                            <Input type="text" id="Lastname" name="text-input" placeholder="required" required/>
                          </Col>
                          </FormGroup>
                          <FormGroup row>
                          <Col md="5" className="mt-1" >
                            <Label htmlFor="nickname"><i className="fa fa-id-card-o"></i> Nickname</Label>
                          </Col>
                          <Col xs="12" md="7" className=" ml-0 pl-0">
                            <Input type="text" id="nickname" name="text-input" placeholder="required" required/>
                          </Col>
                          </FormGroup>
                        </Form>
                      </Col>
                      <Col md='3' className='text-center mt-3'>
                        <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar mb-3" alt="admin@bootstrapmaster.com" />
                        <a href='#'> Upload Photo</a>
                      </Col>
                    </Row>

                    <Row className='mt-1'>
                      <Col md='3'>
                        <FormGroup check inline>
                          <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="Male" />
                          <Label className="form-check-label" check htmlFor="inline-radio1">Male</Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="Female" />
                          <Label className="form-check-label" check htmlFor="inline-radio2">Female</Label>
                        </FormGroup>
                      </Col>
                      <Col md='9'>
                       <FormGroup row>
                          <Col md="4" className='mt-2'>
                            <Label htmlFor="date-input"><i className="fa fa-birthday-cake"></i> Birthday </Label>
                          </Col>
                          <Col xs="12" md="8">
                            <Input type="date" id="date-input" name="date-input" placeholder="date" />
                          </Col>
                       </FormGroup>
                      </Col>
                    </Row>
                    <hr className='mt-0 pt-0'/>
                    <h6 className='ml-1'><ins>Academics</ins></h6>
                    <Row className='pb-0 mb-0'>
                      <Col>
                        <FormGroup row>
                          <Col md="4"  className='mt-2 pl-3'>
                            <Label htmlFor="select"><i className="fa fa-institution"></i> Department</Label>
                          </Col>
                          <Col xs="12" md="8" className=" ml-0 pl-0">
                            <Input type="select" name="select" id="select" >
                              <option value="0">Please select</option>
                              <option value="1">Option #1</option>
                              <option value="2">Option #2</option>
                              <option value="3">Option #3</option>
                            </Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="4"  className='mt-2 pl-3'>
                            <Label htmlFor="select"><i className="fa fa-book"></i>  Major</Label>
                          </Col>
                          <Col xs="12" md="8" className=" ml-0 pl-0">
                            <Input type="select" name="select" id="select" >
                              <option value="0">Please select</option>
                              <option value="1">Option #1</option>
                              <option value="2">Option #2</option>
                              <option value="3">Option #3</option>
                            </Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5"  className='mt-2 pl-3'>
                            <Label htmlFor="select"><i className="fa fa-graduation-cap"></i> Year of Study</Label>
                          </Col>
                          <Col xs="12" md="7" className=" ml-0 pl-0">
                            <Input type="select" name="select" id="select" >
                              <option value="0">Please select</option>
                              <option value="1">Option #1</option>
                              <option value="2">Option #2</option>
                              <option value="3">Option #3</option>
                            </Input>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <hr className='mt-0 pt-0'/>
                    <h6 className='ml-1'><ins>Interest {' & '} Favourites</ins></h6>
                    <FormGroup row className='ml-1 mb-1 pb-0'>
                      <Badge className="mr-1" color="primary">Anime</Badge>
                      <Badge className="mr-1" color="primary">Invest Soc</Badge>
                      <Badge className="mr-1" color="primary">Math Soc</Badge>
                      </FormGroup>
                    <Row className='mt-0 pt-0' id='tag-row'>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="ccmonth"><i className="fa fa-tag"></i> Interest</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="ccyear"><i className="fa fa-tag"></i> Favourites</Label>
                        <Input type="select" name="ccyear" id="ccyear">
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="cvv"><i className="fa fa-tags"></i> Other Tags</Label>
                        <Input type="text" id="cvv" placeholder="123" required />
                      </FormGroup>
                    </Col>
                  </Row>
                  </Col>
                  <Col lg='6'>
                    <h5 className='ml-1'><ins>Contacts</ins></h5>
                    <Row className='mb-1'>
                      <Col>
                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                          <FormGroup row>
                          <Col md="3" className="pr-1 mt-1">
                            <Label htmlFor="Phone"><i className="fa fa-phone"></i> Phone</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="text" id="Phone" name="text-input" placeholder="required" required/>
                          </Col>
                          </FormGroup>
                          <FormGroup row>
                          <Col md="3" className="pr-1 mt-1">
                            <Label htmlFor="Email"><i className="fa fa-envelope"></i> Email</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="text" id="Email" name="text-input" placeholder="required" required/>
                          </Col>
                          </FormGroup>
                          <FormGroup row>
                          <Col md="3" className="pr-1 mt-1" >
                            <Label htmlFor="Residence"><i className="fa fa-building"></i> Residence</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="text" id="Residence" name="text-input" placeholder="required" required/>
                          </Col>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                    <hr className='mt-0 pt-0'/>
                    <h6 className='ml-1'><ins>Social contacts</ins></h6>
                    <Row>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="ccmonth"><i className="fa fa-feed"></i> Channel</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="8">
                      <FormGroup>
                        <Label htmlFor="ccyear"><i className="fa fa-user"></i> Account</Label>
                        <Input type="select" name="ccyear" id="ccyear">
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className='mt-0 pt-0'/>
                  <h6 className='ml-1 pb-2'><ins>Best Memories</ins></h6>
                  <Row>
                    <Col>
                    <FormGroup row>
                       <Col xs="1"><i className="fa fa-plus-circle pt-2 mr-0" id='fa-pin'></i> </Col>
                      <Col xs="12" md="5" className=" ml-0 pl-0">
                        <Input type="date" id="date-input" name="date-input" placeholder="date" />
                      </Col>
                      <Col xs="6" >
                        <FormGroup>
                          <Input type="text" id="Phone" name="text-input" placeholder="required"/>
                        </FormGroup>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3"  className="mr-0 pr-0">
                      
                        <Label htmlFor="textarea-input"><i className="fa fa-thumb-tack"></i> Additional Notes</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                              placeholder="Content..." />
                      </Col>
                    </FormGroup>
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
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link mt-1" onClick={this.togglepopover} id="Reminder" >
              <i className="icon-bell"></i><Badge pill color="danger">5</Badge>
              <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Reminder" toggle={this.togglepopover}>
                <PopoverHeader>Reminders</PopoverHeader>
                <PopoverBody>
                <ListGroup className="list-group-accent" tag={'div'}>
                  <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                    <div className="avatar float-right">
                      <img className="img-avatar" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com"></img>
                    </div>
                    <div>Meeting with <strong>Lucas</strong> </div>
                    <small className="text-muted mr-3">
                      <i className="icon-calendar"></i>&nbsp; 1 - 3pm
                    </small>
                    <small className="text-muted">
                      <i className="icon-location-pin"></i> Palo Alto, CA
                    </small>
                  </ListGroupItem>
                  <ListGroupItem action tag="a" href="#" className="list-group-item-accent-info list-group-item-divider">
                    <div className="avatar float-right">
                      <img className="img-avatar" src="assets/img/avatars/4.jpg" alt="admin@bootstrapmaster.com"></img>
                    </div>
                    <div>Skype with <strong>Megan</strong></div>
                    <small className="text-muted mr-3">
                      <i className="icon-calendar"></i>&nbsp; 4 - 5pm
                    </small>
                    <small className="text-muted">
                      <i className="icon-social-skype"></i> On-line
                    </small>
                  </ListGroupItem>
                </ListGroup> 
                </PopoverBody>
            </Popover>
            </NavLink>
          </NavItem>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Invitations<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
