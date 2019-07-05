import React, { Component } from 'react';
import {
  Badge,Button,Card,CardBody, CardHeader,Col,Row,Table, Fade, ListGroupItem, ListGroup,
} from 'reactstrap';
import UserData from './Pagecomponent/tsconfig.json';
import Fill2 from './Pagecomponent/InfoSheet1';
import Fill3 from './Pagecomponent/social';
import Fill4 from './Pagecomponent/Delete';
import { Link } from 'react-router-dom';
import Fill1 from './InfoSheet2';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.getSelfInfo = this.getSelfInfo.bind(this);
    this.showTags = this.showTags.bind(this);
    this.renderTableData= this.renderTableData.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getContactInfo = this.getContactInfo.bind(this);
    this.state = {
      fadeIn: true,
      timeout: 200,
      infos: UserData,
      //Infos
      firstName: 'Raul',
      lastName: 'Menendez',
      nickName: '',
      sex: 'Male',
      Major: '',
      YOS: '',
      Tags: [],
      img: 'assets/img/defaultUser.png',
    };
  }

  //Contact person's info update
  getContactInfo(_info){
    console.log(_info)

    // Data be to synced with backend 
    /* this.setState({
      firstName: _info.firstName,
      lastName: _info.lastName,
      nickName: _info.nickName,
      sex: _info.sex,
      Major: _info.Major,
      YOS: _info.YOS,
      Tags: _info.Tags,
      img: _info.img,
    }) */
  }

  //Handle the delete Button for child component delete.js
  handleDelete(_State){
    this.setState({
      infos:[...this.state.infos.filter(info => info.id !== _State.id)]
    })
  } // Make sure the id of every UserData is unique so the actual JSON do not have repeated id.

  renderTags(index){
    return this.state.infos[index].Tags.map((tag, i)=>{
      return <Badge className="mr-1" color="primary" key={i}>{tag}</Badge>
    })
  }

  renderTableData() {
    let infoDisplay = this.state.infos.slice(0, 5); 

    return infoDisplay.map((info, index) => {
        const { id, firstName, lastName, nickname, Department, YOS, Major, Group, Tags, sex,
        Recent_Event, Event_Date, Phone, Email, Social_Account, img, Residence, birthday, note} = info //destructuring
        return (
              <tr key={id}>
                <td className="text-center">
                  <div className="avatar">
                    <img src={img} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                </td>
                <td>
                  <div>{(nickname === '')?`${firstName} ${lastName}`:`${firstName} ${lastName}, ${nickname}`}</div>
                  <div className="small text-muted">
                    <span>{Major}</span> 
                  </div>
                </td>
                <td className="text-center">
                  <span className='text-muted'>{(Group.length === 0 ) ? 'None': Group}</span>
                </td>
                <td>
                  <div className="text-center">
                  {(Tags.length === 0 ) ? 'None': this.renderTags(index)}
                  </div>
                </td>
                <td>
                  <div className='text-center'>
                  <div className="small text-muted">{(Event_Date.length === 0 ) ? ' ': Event_Date}</div>
                  <strong> {(Recent_Event.length === 0 ) ? 'No Event': Recent_Event}</strong>
                  </div>
                </td>
                <td className='mr-0 pr-0'>
                  <div className="small text-muted"><i className="fa fa-phone mr-1"></i> {(Phone.length === 0 ) ? 'No Record': Phone}</div>
                  <div className="small text-muted"><i className="fa fa-envelope mr-1"></i> {(Email.length === 0 ) ? 'No Record': Email}</div>
                </td>
                <td className='pl-0 ml-0 mr-0 pr-0 text-center'>
                  <div className='mr-0'>
                  <Fill2 firstName={firstName}
                        lastName={lastName}
                        nickName={nickname}
                        sex={sex}
                        birthday={birthday}
                        Department={Department}
                        Major={Major}
                        YOS={YOS}
                        Tags={Tags}
                        Phone={Phone}
                        Email={Email}
                        Residence={Residence}
                        Social_Contact_type= {"Facebook"}
                        Social_Contact_account={Social_Account.Facebook}
                        BM_date={Event_Date}
                        BM_name={Recent_Event}
                        note={note}
                        img={img}
                        getContactInfo = {this.getContactInfo}
                          />
                  <Fill3 facebook={Social_Account.Facebook} twitter={Social_Account.Twitter}/>
                  <Fill4 handleDelete={this.handleDelete} id={id}/>
                </div>  
                </td>
              </tr>
    )
 })
}

/*   
  toggleFade() {
    this.setState((prevState) => { 
      return { fadeIn: !prevState }
    });
  } */
  // Receive info filled from infosheet
  getSelfInfo(_info){
    this.setState({
      firstName: _info.firstName,
      lastName: _info.lastName,
      nickName: _info.nickName,
      sex: _info.sex,
      Major: _info.Major,
      YOS: _info.YOS,
      Tags: _info.Tags,
      img: _info.img,
    })
  }
  //Display tags on info card
  showTags(){
    let {Tags} = this.state;
    return Tags.map((tag, index) =>{
      return (
        <Badge key={index} className="user-tag" color="primary">{tag}</Badge>
      )
    })
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="animated fadeIn">
        <h1 className="h3 mb-3 text-gray-800">Dashboard</h1>
         <Row>
          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              {/*Self Info card display */}
              <Card className='dash-card card-accent-info shadow-sm'>
                <CardHeader>
                  <span>Your Info Card</span>
                  <div className="card-header-actions">
                    <Fill1 firstName= {this.state.firstName}
                          lastName={this.state.lastName}
                          nickName={this.state.nickName}
                          sex={this.state.sex}
                          Major={this.state.Major}
                          YOS={this.state.YOS}
                          Tags= {this.state.Tags}
                          img={this.state.img}
                          getSelfInfo = {this.getSelfInfo}/>
                  </div>
                </CardHeader> 
                <CardBody className='text-center'>
                  <img src={this.state.img}  className="rounded-circle w-50 pb-2" id='user-icon' alt="admin@bootstrapmaster.com" />
                  <h4 className='pb-0 mb-0'>
                      <strong className='Username'>{(this.state.nickName === '')?`${this.state.firstName} ${this.state.lastName}`:`${this.state.firstName} ${this.state.lastName}, ${this.state.nickName}`} </strong>
                      {(this.state.sex === "Male")?<i className='fa fa-mars male'></i>:<i className='fa fa-venus female'></i>}
                  </h4>
                  <p className='pt-0 mt-0 pb-0 mb-0'>{this.state.Major}</p>
                  <p className='pt-0 mt-0 pb-0 mb-0'>{this.state.YOS} </p>
                  <hr/>
                  <div className="text-center">
                    {this.showTags()}
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>

          <Col xs="12" sm="6" md="4"> 
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card className='dash-card card-accent-info shadow-sm'>
                {/*Event Summary display */}
                <CardHeader>
                  <span>Event Summary</span>
                  <div className="card-header-actions">
                  <Link to="/analysis">
                    <Button outline className='card-header-action' id='modalbtn'><i className='fa fa-location-arrow'></i> </Button>
                  </Link>
                  </div>
                </CardHeader>
                <CardBody className='pl-0 pt-0 ml-0 mt-0 mr-0 pr-0 mb-0 pb-0'>
                  <div>
                    <ListGroup className="list-group-accent" tag={'div'}>
                  <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">This Week</ListGroupItem>
                    <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                      <div className="avatar float-right">
                        <img className="img-avatar" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com"></img>
                      </div>
                      <div>Meeting with <strong>Lucas</strong> </div>
                      <small className="text-muted mr-3">
                        <i className="icon-calendar"></i>&nbsp; June 3rd, Wed
                      </small>
                      <small className="text-muted">
                        <i className="icon-location-pin"></i> Shopping at Orchard
                      </small>
                    </ListGroupItem>
                    <ListGroupItem action tag="a" href="#" className="list-group-item-accent-info list-group-item-divider">
                      <div className="avatar float-right">
                        <img className="img-avatar" src="assets/img/avatars/4.jpg" alt="admin@bootstrapmaster.com"></img>
                      </div>
                      <div>Group work with <strong>Megan</strong></div>
                      <small className="text-muted mr-3">
                        <i className="icon-calendar"></i>&nbsp; June 4th, Thu
                      </small>
                      <small className="text-muted">
                        <i className="icon-social-skype"></i> MA1521 Project
                      </small>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Last Week</ListGroupItem>
                    <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                      <div><strong>Invest Soc </strong>presentation</div>
                      <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; May 28th, Thu</small>
                      <small className="text-muted"><i className="icon-home"></i>&nbsp; Industry Report for Consumer Staples</small>
                      <div className="avatars-stack mt-2 float-right">
                        <div className="avatar avatar-xs ">
                          <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                        <div className="avatar avatar-xs">
                          <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                        <div className="avatar avatar-xs">
                          <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                        <div className="avatar avatar-xs">
                          <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                        <div className="avatar avatar-xs">
                          <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem action tag="a" href="#" className="list-group-item-accent-primary list-group-item-divider">
                      <div><strong>Movie Wathcing</strong></div>
                      <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; May 31, Sun</small>
                      <small className="text-muted"><i className="icon-home"></i>&nbsp; FSN: Lost butterfly</small>
                      <div className="avatars-stack mt-2 float-right">
                        <div className="avatar avatar-xs">
                          <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                        <div className="avatar avatar-xs">
                          <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                        <div className="avatar avatar-xs">
                          <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                        <div className="avatar avatar-xs">
                          <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                        <div className="avatar avatar-xs">
                          <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                        <div className="avatar avatar-xs">
                          <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                        <div className="avatar avatar-xs">
                          <img src={'assets/img/avatars/8.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </div>
                      </div>
                    </ListGroupItem>
                  </ListGroup>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card className='dash-card card-accent-info shadow-sm'>
                {/*Analysis Summary display */}
                <CardHeader>
                  <span>Analysis Summary</span>
                  <div className="card-header-actions">
                  <Link to="/analysis">
                    <Button outline className='card-header-action' id='modalbtn'><i className='fa fa-location-arrow'></i> </Button>
                  </Link>
                  </div>
                </CardHeader>
                <CardBody className='pt-0 mt-3'>
                  <h6 className='card3-head'> <strong>This Month</strong> </h6>
                  <hr className='mb-3 mt-1 break1 text-left' id='analysis_sum_break'/>
                  <Row className='mb-0 pb-0'>
                    <Col md='6'>
                      <h6 className='text-muted'><i className="fa fa-user-plus mr-2"></i> New Friends Added</h6>
                      <h6 className='text-muted'><i className="fa fa-comments mr-2"></i> New Events Shared</h6> 
                    </Col>
                    <Col color='secondary' md='6' className='text-right pr-2 mr-0'>
                      <h6 className='text-muted'><strong>88</strong></h6>
                      <h6 className='text-muted'><strong>55</strong></h6>
                    </Col>
                  </Row>
                  <hr className='mt-1 pt-0'/>
                  <h6 className='card3-head'><strong> Monthly Best Friends </strong></h6>
                  <hr className='mb-3 mt-1 break2 text-left' id='analysis_sum_break'/>
                  <Row className='mb-0 pb-0'>
                    <Col md='2'>
                      <div className="avatar pr-0 mr-0">
                        <img className="img-avatar" src="assets/img/avatars/4.jpg" alt="admin@bootstrapmaster.com"></img>
                      </div>
                    </Col>
                    <Col md='4' className= 'pl-0 ml-0'>
                      <div className='pt-2 pl-0 ml-0'>Megan Stanley</div>
                    </Col>
                    <Col md='6' className='text-right'>
                      <div>
                      <small className="text-muted">
                        <i className="icon-social-skype"></i>&nbsp; 8 Tags
                      </small>
                      </div>
                      <div>
                      <small className="text-muted">
                        <i className="icon-calendar"></i>&nbsp; 3 Events
                      </small>
                      </div>                     
                    </Col>                    
                  </Row>
                  <hr className='mt-1 pt-0 mb-2 pb-0'/>
                  <Row>
                    <Col md='2'>
                      <div className="avatar pr-0 mr-0">
                        <img className="img-avatar" src="assets/img/avatars/4.jpg" alt="admin@bootstrapmaster.com"></img>
                      </div>
                    </Col>
                    <Col md='4' className= 'pl-0 ml-0'>
                      <div className='pt-2 pl-0 ml-0'>Megan Stanley</div>
                    </Col>
                    <Col md='6' className='text-right'>
                      <div>
                      <small className="text-muted">
                        <i className="icon-social-skype"></i>&nbsp; 8 Tags
                      </small>
                      </div>
                      <div>
                      <small className="text-muted">
                        <i className="icon-calendar"></i>&nbsp; 3 Events
                      </small>
                      </div>
                      
                    </Col>
                  </Row>
                  <hr className='mt-1 pt-0'/>

                </CardBody>
              </Card>
            </Fade>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="card-accent-info shadow-sm">
              {/*5 Most recent Addition display */}
              <CardHeader>
                Recently Added
              </CardHeader>
             <CardBody>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>Name</th>
                    <th className="text-center">Group</th>
                    <th className="text-center">Tags</th>
                    <th className="text-center mr-2">Recent events</th>
                    <th>Contacts</th>
                    <th> </th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.renderTableData()}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
