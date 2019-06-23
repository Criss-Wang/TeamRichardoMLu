import React, { Component, } from 'react';
import {
  Badge,Button,Card,CardBody,
  CardHeader,Col,Row,Fade, 
} from 'reactstrap';
import Fill1 from './InfoSheet1';
import Fill2 from './InfoSheet2';

class Groups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    };
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            {/* <h1 className="h3 mb-3 text-gray-800">Groups <span className='text-muted amount'> (13 in total)</span></h1> */}
            <Card className="card-accent-info shadow-sm mb-2 pb-0">
              <CardHeader>
              <i className="fa fa-users"></i> Network Groupings <span className='text-muted pl-1 amount'> (13 in total)</span>
                <Button color="primary" outline className="mr-2 float-right" size='sm'><i className='fa fa-chevron-right'></i></Button>
                <Button color="primary" outline className="mr-2 float-right" size='sm'><i className='fa fa-chevron-left'></i></Button>
                <Fill1 />
              </CardHeader>
              <CardBody className='mb-2 pb-0'>
                <Row>
                <Col xs="12" sm="6" md="3">
                  <Fade timeout={this.state.timeout} in={this.state.fadeIn}>                
                    <Card className='dash-card group shadow-sm'>
                      <CardHeader>
                        <span><strong>Math Friends</strong></span>
                        <div className="card-header-actions">
                          <Fill2/>
                        </div>
                      </CardHeader>
                      <CardBody className='pt-0 mt-0'>
                        <p className='pt-2 mt-0 pb-2 mb-0'>People <Badge className=" float-right mt-1" color="primary" size='sm'>15</Badge></p>
                        <hr className='mt-0 pt-0'/>
                        <div className="text-left">
                          <div className="avatars-stack mt-0 mb-0">
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
                          <div className='people_ex text-left text-muted'> George Lucas, Sion Williams and 13+ </div>
                        </div>
                        <p className='pt-2 mt-0 pb-2 mb-0'>Events <Badge className=" float-right mt-1" color="primary" size='sm'>3</Badge></p>
                        <hr className='mt-0 pt-0 pb-2 mb-0'/>
                        <div className=' text-left gp_event mb-1 pl-2'> Math Soc Meeting </div>
                        <div className=' text-left gp_event mb-1 pl-2'> Will's Birthday </div>
                        <div className=' text-left gp_event mb-1 pl-2 text-muted'> One More ... </div>
                      </CardBody>
                    </Card>
                  </Fade>
                </Col>
                <Col xs="12" sm="6" md="3">
                  <Fade timeout={this.state.timeout} in={this.state.fadeIn}>                
                    <Card className='dash-card group shadow-sm'>
                      <CardHeader>
                        <span><strong>Math Friends</strong></span>
                        <div className="card-header-actions">
                          <Fill2/>
                        </div>
                      </CardHeader>
                      <CardBody className='pt-0 mt-0'>
                        <p className='pt-2 mt-0 pb-2 mb-0'>People <Badge className=" float-right mt-1" color="primary" size='sm'>15</Badge></p>
                        <hr className='mt-0 pt-0'/>
                        <div className="text-left">
                          <div className="avatars-stack mt-0 mb-0">
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
                          <div className='people_ex text-left text-muted'> George Lucas, Sion Williams and 13+ </div>
                        </div>
                        <p className='pt-2 mt-0 pb-2 mb-0'>Events <Badge className=" float-right mt-1" color="primary" size='sm'>3</Badge></p>
                        <hr className='mt-0 pt-0 pb-2 mb-0'/>
                        <div className=' text-left gp_event mb-1 pl-2'> Math Soc Meeting </div>
                        <div className=' text-left gp_event mb-1 pl-2'> Will's Birthday </div>
                        <div className=' text-left gp_event mb-1 pl-2 text-muted'> One More ... </div>
                      </CardBody>
                    </Card>
                  </Fade>
                </Col>
                <Col xs="12" sm="6" md="3">
                  <Fade timeout={this.state.timeout} in={this.state.fadeIn}>                
                    <Card className='dash-card group shadow-sm'>
                      <CardHeader>
                        <span><strong>Math Friends</strong></span>
                        <div className="card-header-actions">
                          <Fill2/>
                        </div>
                      </CardHeader>
                      <CardBody className='pt-0 mt-0'>
                        <p className='pt-2 mt-0 pb-2 mb-0'>People <Badge className=" float-right mt-1" color="primary" size='sm'>15</Badge></p>
                        <hr className='mt-0 pt-0'/>
                        <div className="text-left">
                          <div className="avatars-stack mt-0 mb-0">
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
                          <div className='people_ex text-left text-muted'> George Lucas, Sion Williams and 13+ </div>
                        </div>
                        <p className='pt-2 mt-0 pb-2 mb-0'>Events <Badge className=" float-right mt-1" color="primary" size='sm'>3</Badge></p>
                        <hr className='mt-0 pt-0 pb-2 mb-0'/>
                        <div className=' text-left gp_event mb-1 pl-2'> Math Soc Meeting </div>
                        <div className=' text-left gp_event mb-1 pl-2'> Will's Birthday </div>
                        <div className=' text-left gp_event mb-1 pl-2 text-muted'> One More ... </div>
                      </CardBody>
                    </Card>
                  </Fade>
                </Col>
                <Col xs="12" sm="6" md="3">
                  <Fade timeout={this.state.timeout} in={this.state.fadeIn}>                
                    <Card className='dash-card group shadow-sm'>
                      <CardHeader>
                        <span><strong>Math Friends</strong></span>
                        <div className="card-header-actions">
                          <Fill2/>
                        </div>
                      </CardHeader>
                      <CardBody className='pt-0 mt-0'>
                        <p className='pt-2 mt-0 pb-2 mb-0'>People <Badge className=" float-right mt-1" color="primary" size='sm'>15</Badge></p>
                        <hr className='mt-0 pt-0'/>
                        <div className="text-left">
                          <div className="avatars-stack mt-0 mb-0">
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
                          <div className='people_ex text-left text-muted'> George Lucas, Sion Williams and 13+ </div>
                        </div>
                        <p className='pt-2 mt-0 pb-2 mb-0'>Events <Badge className=" float-right mt-1" color="primary" size='sm'>3</Badge></p>
                        <hr className='mt-0 pt-0 pb-2 mb-0'/>
                        <div className=' text-left gp_event mb-1 pl-2'> Math Soc Meeting </div>
                        <div className=' text-left gp_event mb-1 pl-2'> Will's Birthday </div>
                        <div className=' text-left gp_event mb-1 pl-2 text-muted'> One More ... </div>
                      </CardBody>
                    </Card>
                  </Fade>
                </Col>
                </Row>
                <Row>
                <Col xs="12" sm="6" md="3">
                  <Fade timeout={this.state.timeout} in={this.state.fadeIn}>                
                    <Card className='dash-card group shadow-sm'>
                      <CardHeader>
                        <span><strong>Math Friends</strong></span>
                        <div className="card-header-actions">
                          <Fill2/>
                        </div>
                      </CardHeader>
                      <CardBody className='pt-0 mt-0'>
                        <p className='pt-2 mt-0 pb-2 mb-0'>People <Badge className=" float-right mt-1" color="primary" size='sm'>15</Badge></p>
                        <hr className='mt-0 pt-0'/>
                        <div className="text-left">
                          <div className="avatars-stack mt-0 mb-0">
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
                          <div className='people_ex text-left text-muted'> George Lucas, Sion Williams and 13+ </div>
                        </div>
                        <p className='pt-2 mt-0 pb-2 mb-0'>Events <Badge className=" float-right mt-1" color="primary" size='sm'>3</Badge></p>
                        <hr className='mt-0 pt-0 pb-2 mb-0'/>
                        <div className=' text-left gp_event mb-1 pl-2'> Math Soc Meeting </div>
                        <div className=' text-left gp_event mb-1 pl-2'> Will's Birthday </div>
                        <div className=' text-left gp_event mb-1 pl-2 text-muted'> One More ... </div>
                      </CardBody>
                    </Card>
                  </Fade>
                </Col>
                <Col xs="12" sm="6" md="3">
                  <Fade timeout={this.state.timeout} in={this.state.fadeIn}>                
                    <Card className='dash-card group shadow-sm'>
                      <CardHeader>
                        <span><strong>Math Friends</strong></span>
                        <div className="card-header-actions">
                          <Fill2/>
                        </div>
                      </CardHeader>
                      <CardBody className='pt-0 mt-0'>
                        <p className='pt-2 mt-0 pb-2 mb-0'>People <Badge className=" float-right mt-1" color="primary" size='sm'>15</Badge></p>
                        <hr className='mt-0 pt-0'/>
                        <div className="text-left">
                          <div className="avatars-stack mt-0 mb-0">
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
                          <div className='people_ex text-left text-muted'> George Lucas, Sion Williams and 13+ </div>
                        </div>
                        <p className='pt-2 mt-0 pb-2 mb-0'>Events <Badge className=" float-right mt-1" color="primary" size='sm'>3</Badge></p>
                        <hr className='mt-0 pt-0 pb-2 mb-0'/>
                        <div className=' text-left gp_event mb-1 pl-2'> Math Soc Meeting </div>
                        <div className=' text-left gp_event mb-1 pl-2'> Will's Birthday </div>
                        <div className=' text-left gp_event mb-1 pl-2 text-muted'> One More ... </div>
                      </CardBody>
                    </Card>
                  </Fade>
                </Col>
                <Col xs="12" sm="6" md="3">
                  <Fade timeout={this.state.timeout} in={this.state.fadeIn}>                
                    <Card className='dash-card group shadow-sm'>
                      <CardHeader>
                        <span><strong>Math Friends</strong></span>
                        <div className="card-header-actions">
                          <Fill2/>
                        </div>
                      </CardHeader>
                      <CardBody className='pt-0 mt-0'>
                        <p className='pt-2 mt-0 pb-2 mb-0'>People <Badge className=" float-right mt-1" color="primary" size='sm'>15</Badge></p>
                        <hr className='mt-0 pt-0'/>
                        <div className="text-left">
                          <div className="avatars-stack mt-0 mb-0">
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
                          <div className='people_ex text-left text-muted'> George Lucas, Sion Williams and 13+ </div>
                        </div>
                        <p className='pt-2 mt-0 pb-2 mb-0'>Events <Badge className=" float-right mt-1" color="primary" size='sm'>3</Badge></p>
                        <hr className='mt-0 pt-0 pb-2 mb-0'/>
                        <div className=' text-left gp_event mb-1 pl-2'> Math Soc Meeting </div>
                        <div className=' text-left gp_event mb-1 pl-2'> Will's Birthday </div>
                        <div className=' text-left gp_event mb-1 pl-2 text-muted'> One More ... </div>
                      </CardBody>
                    </Card>
                  </Fade>
                </Col>
                <Col xs="12" sm="6" md="3">
                  <Fade timeout={this.state.timeout} in={this.state.fadeIn}>                
                    <Card className='dash-card group shadow-sm'>
                      <CardHeader>
                        <span><strong>Math Friends</strong></span>
                        <div className="card-header-actions">
                          <Fill2/>
                        </div>
                      </CardHeader>
                      <CardBody className='pt-0 mt-0'>
                        <p className='pt-2 mt-0 pb-2 mb-0'>People <Badge className=" float-right mt-1" color="primary" size='sm'>15</Badge></p>
                        <hr className='mt-0 pt-0'/>
                        <div className="text-left">
                          <div className="avatars-stack mt-0 mb-0">
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
                          <div className='people_ex text-left text-muted'> George Lucas, Sion Williams and 13+ </div>
                        </div>
                        <p className='pt-2 mt-0 pb-2 mb-0'>Events <Badge className=" float-right mt-1" color="primary" size='sm'>3</Badge></p>
                        <hr className='mt-0 pt-0 pb-2 mb-0'/>
                        <div className=' text-left gp_event mb-1 pl-2'> Math Soc Meeting </div>
                        <div className=' text-left gp_event mb-1 pl-2'> Will's Birthday </div>
                        <div className=' text-left gp_event mb-1 pl-2 text-muted'> One More ... </div>
                      </CardBody>
                    </Card>
                  </Fade>
                </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Groups;
