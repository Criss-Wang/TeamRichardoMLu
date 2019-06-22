import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,Button,ButtonDropdown,ButtonGroup,ButtonToolbar,Card,CardBody,CardFooter,
  CardHeader,CardTitle,Col,Dropdown,DropdownItem,DropdownMenu,DropdownToggle,
  Progress,Row,Table, Fade, Collapse, Modal, ModalHeader, ModalBody, Form, 
  FormGroup, Label, Input, ModalFooter,ListGroupItem, ListGroup,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.togglemodal = this.togglemodal.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      fadeIn: true,
      timeout: 300,
      modal: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  toggleFade() {
    this.setState((prevState) => { 
      return { fadeIn: !prevState }
    });
  }

  togglemodal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="animated fadeIn">
         <Row>
          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card className='dash-card card-accent-info shadow-sm'>
                <CardHeader>
                  <span>Your Info Card</span>
                  <div className="card-header-actions">
                  <Button onClick={this.togglemodal} outline className='card-header-action' id='modalbtn'><i className="fa fa-pencil"></i></Button>
                    <Modal isOpen={this.state.modal} toggle={this.togglemodal} className={'modal-lg modal-info '+ this.props.className} id='modalCenter'>
                      <ModalHeader toggle={this.togglemodal}>
                        <strong>Self-Info Card</strong>
                        <small> Editing</small>
                      </ModalHeader>
                      <ModalBody>
                        <Row>
                          <Col lg='6' xs='6' className='pl-4 pr-3'>
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
                  </div>
                </CardHeader>
                <CardBody className='text-center'>
                  <img src={'assets/img/avatars/4.jpg'}  className="rounded-circle w-50 pb-2" id='user-icon' alt="admin@bootstrapmaster.com" />
                  <h4 className='pb-0 mb-0'><strong className='Username'>Araon Menendez </strong><i className='fa fa-mars male'></i><i className='fa fa-venus female'></i></h4>
                  <p className='pt-0 mt-0 pb-0 mb-0'>Applied Mathematics</p>
                  <p className='pt-0 mt-0 pb-0 mb-0'>Undergraduate-Year 2 </p>
                  <hr/>
                  <div className="text-center">
                      <Badge className="user-tag" color="primary">Anime</Badge>
                      <Badge className="user-tag" color="primary">Invest Soc</Badge>
                      <Badge className="user-tag" color="primary">Math Soc</Badge>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>

          <Col xs="12" sm="6" md="4"> 
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card className='dash-card card-accent-info shadow-sm'>
                <CardHeader>
                  Event Summary
                </CardHeader>
                <CardBody className='pl-0 pt-0 ml-0 mt-0 mr-0 pr-0 mb-0 pb-0'>
                  <div>
                    <ListGroup className="list-group-accent" tag={'div'}>
                  <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Today</ListGroupItem>
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
                    <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Tomorrow</ListGroupItem>
                    <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                      <div>New UI Project - <strong>deadline</strong></div>
                      <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 10 - 11pm</small>
                      <small className="text-muted"><i className="icon-home"></i>&nbsp; creativeLabs HQ</small>
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
                      <div><strong>Team meeting</strong></div>
                      <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 4 - 6pm</small>
                      <small className="text-muted"><i className="icon-home"></i>&nbsp; creativeLabs HQ</small>
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
                <CardHeader>
                  Analysis Summary
                </CardHeader>
                <CardBody className='pt-0 mt-3'>
                  <h6 className='card3-head'> <strong>This Month</strong> </h6>
                  <hr className='mb-2 mt-2 break1 text-left'/>
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
                  <hr className='mb-2 mt-2 break2 text-left'/>
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
{/*
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Traffic</CardTitle>
                    <div className="small text-muted">November 2015</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Visits</div>
                    <strong>29.703 Users (40%)</strong>
                    <Progress className="progress-xs mt-2" color="success" value="40" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Unique</div>
                    <strong>24.093 Users (20%)</strong>
                    <Progress className="progress-xs mt-2" color="info" value="20" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Pageviews</div>
                    <strong>78.706 Views (60%)</strong>
                    <Progress className="progress-xs mt-2" color="warning" value="60" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">New Users</div>
                    <strong>22.123 Users (80%)</strong>
                    <Progress className="progress-xs mt-2" color="danger" value="80" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Bounce Rate</div>
                    <strong>Average Rate (40.15%)</strong>
                    <Progress className="progress-xs mt-2" color="primary" value="40" />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <Widget03 dataBox={() => ({ variant: 'facebook', friends: '89k', feeds: '459' })} >
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90} />
                </div>
              </Widget03>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />
                </div>
              </Widget03>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <Widget03 dataBox={() => ({ variant: 'linkedin', contacts: '500+', feeds: '292' })} >
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90} />
                </div>
              </Widget03>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <Widget03 dataBox={() => ({ variant: 'google-plus', followers: '894', circles: '92' })} >
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90} />
                </div>
              </Widget03>
            </Suspense>
          </Col>
        </Row> */}

        <Row>
          <Col>
            <Card className="card-accent-info shadow-sm">
              <CardHeader>
                Recently Added
              </CardHeader>
             <CardBody>
{/*                  <Row>
                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">New Clients</small>
                          <br />
                          <strong className="h4">9,123</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-danger">
                          <small className="text-muted">Recurring Clients</small>
                          <br />
                          <strong className="h4">22,643</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0" />
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Monday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="34" />
                        <Progress className="progress-xs" color="danger" value="78" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Tuesday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="56" />
                        <Progress className="progress-xs" color="danger" value="94" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Wednesday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="12" />
                        <Progress className="progress-xs" color="danger" value="67" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Thursday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="43" />
                        <Progress className="progress-xs" color="danger" value="91" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Friday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="22" />
                        <Progress className="progress-xs" color="danger" value="73" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Saturday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="53" />
                        <Progress className="progress-xs" color="danger" value="82" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Sunday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="9" />
                        <Progress className="progress-xs" color="danger" value="69" />
                      </div>
                    </div>
                    <div className="legend text-center">
                      <small>
                        <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                        New clients
                        &nbsp;
                        <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                        Recurring clients
                      </small>
                    </div>
                  </Col>
                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-warning">
                          <small className="text-muted">Pageviews</small>
                          <br />
                          <strong className="h4">78,623</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(2, brandWarning)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-success">
                          <small className="text-muted">Organic</small>
                          <br />
                          <strong className="h4">49,123</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(3, brandSuccess)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0" />
                    <ul>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-user progress-group-icon"></i>
                          <span className="title">Male</span>
                          <span className="ml-auto font-weight-bold">43%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="warning" value="43" />
                        </div>
                      </div>
                      <div className="progress-group mb-5">
                        <div className="progress-group-header">
                          <i className="icon-user-female progress-group-icon"></i>
                          <span className="title">Female</span>
                          <span className="ml-auto font-weight-bold">37%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="warning" value="37" />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-globe progress-group-icon"></i>
                          <span className="title">Organic Search</span>
                          <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="56" />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-social-facebook progress-group-icon"></i>
                          <span className="title">Facebook</span>
                          <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="15" />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-social-twitter progress-group-icon"></i>
                          <span className="title">Twitter</span>
                          <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="11" />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-social-linkedin progress-group-icon"></i>
                          <span className="title">LinkedIn</span>
                          <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress className="progress-xs" color="success" value="8" />
                        </div>
                      </div>
                      <div className="divider text-center">
                        <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
                                title="" data-original-title="show more"><i className="icon-options"></i></Button>
                      </div>
                    </ul>
                  </Col>
                </Row>
                <br /> */}
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
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>Year 1 Applied Mathematics</span> 
                      </div>
                    </td>
                    <td className="text-center">
                      <span className='text-muted'>None</span>
                    </td>
                    <td>
                      <div className="text-center">
                      <Badge className="mr-1" color="primary">Anime</Badge>
                      <Badge className="mr-1" color="primary">Invest Soc</Badge>
                      <Badge className="mr-1" color="primary">Math Soc</Badge>
                      </div>
                    </td>
                    <td>
                      <div className='text-center'>
                      <div className="small text-muted">Last Event</div>
                      <strong> Math Soc Outing</strong>
                      </div>
                    </td>
                    <td className='mr-0 pr-0'>
                      <div className="small text-muted"><i className="fa fa-phone mr-1"></i> +65 91802872</div>
                      <div className="small text-muted"><i className="fa fa-envelope mr-1"></i> YipGum@u.nus.edu.sg</div>
                    </td>
                    <td className='pl-0 ml-0 mr-0 pr-0 text-center'>
                      <div className='mr-0'>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-pencil"></i></Button>
                      <Button  color='ghost-dark ' className='mr-1'><i className="fa fa-comments"></i> </Button>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-trash"></i> </Button>
                    </div>  
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">
                        <span>Associate Prof (Math Dept)</span> 
                      </div>
                    </td>
                    <td className="text-center">
                      <span className='text-muted'>None</span>
                    </td>
                    <td>
                      <div className="text-center">
                      <Badge className="mr-1" color="primary">Anime</Badge>
                      <Badge className="mr-1" color="primary">Invest Soc</Badge>
                      <Badge className="mr-1" color="primary">Math Soc</Badge>
                      </div>
                    </td>
                    <td>
                      <div className='text-center'>
                      <div className="small text-muted">Last Event</div>
                      <strong> Math Soc Outing</strong>
                      </div>
                    </td>
                    <td className='mr-0 pr-0'>
                      <div className="small text-muted"><i className="fa fa-phone mr-1"></i> +65 91802872</div>
                      <div className="small text-muted"><i className="fa fa-envelope mr-1"></i> YipGum@u.nus.edu.sg</div>
                    </td>
                    <td className='pl-0 ml-0 mr-0 pr-0 text-center'>
                      <div className='mr-0'>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-pencil"></i></Button>
                      <Button  color='ghost-dark ' className='mr-1'><i className="fa fa-comments"></i> </Button>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-trash"></i> </Button>
                    </div>  
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>prprprprpr</div>
                      <div className="small text-muted">
                        <span>Year 2 Computer Science</span> 
                      </div>
                    </td>
                    <td className="text-center">
                      <span className='text-muted'>None</span>
                    </td>
                    <td>
                      <div className="text-center">
                      <Badge className="mr-1" color="primary">Anime</Badge>
                      <Badge className="mr-1" color="primary">Invest Soc</Badge>
                      <Badge className="mr-1" color="primary">Math Soc</Badge>
                      </div>
                    </td>
                    <td>
                      <div className='text-center'>
                      <div className="small text-muted">Last Event</div>
                      <strong> Math Soc Outing</strong>
                      </div>
                    </td>
                    <td className='mr-0 pr-0'>
                      <div className="small text-muted"><i className="fa fa-phone mr-1"></i> +65 91802872</div>
                      <div className="small text-muted"><i className="fa fa-envelope mr-1"></i> YipGum@u.nus.edu.sg</div>
                    </td>
                    <td className='pl-0 ml-0 mr-0 pr-0 text-center'>
                      <div className='mr-0'>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-pencil"></i></Button>
                      <Button  color='ghost-dark ' className='mr-1'><i className="fa fa-comments"></i> </Button>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-trash"></i> </Button>
                    </div>  
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-secondary"></span>
                      </div>
                    </td>
                    <td>
                    <div>Enéas Kwadwo</div>
                      <div className="small text-muted">
                        <span>Year 2 Computer Science</span> 
                      </div>
                    </td>
                    <td className="text-center">
                      <span className='text-muted'>None</span>
                    </td>
                    <td>
                      <div className="text-center">
                      <Badge className="mr-1" color="primary">Anime</Badge>
                      <Badge className="mr-1" color="primary">Invest Soc</Badge>
                      <Badge className="mr-1" color="primary">Math Soc</Badge>
                      </div>
                    </td>
                    <td>
                      <div className='text-center'>
                      <div className="small text-muted">Last Event</div>
                      <strong> Math Soc Outing</strong>
                      </div>
                    </td>
                    <td className='mr-0 pr-0'>
                      <div className="small text-muted"><i className="fa fa-phone mr-1"></i> +65 91802872</div>
                      <div className="small text-muted"><i className="fa fa-envelope mr-1"></i> YipGum@u.nus.edu.sg</div>
                    </td>
                    <td className='pl-0 ml-0 mr-0 pr-0 text-center'>
                      <div className='mr-0'>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-pencil"></i></Button>
                      <Button  color='ghost-dark ' className='mr-1'><i className="fa fa-comments"></i> </Button>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-trash"></i> </Button>
                    </div>  
                    </td>                  
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                    <div>Agapetus Tadeáš</div>
                      <div className="small text-muted">
                        <span>Year 2 Computer Science</span> 
                      </div>
                    </td>
                    <td className="text-center">
                      <span className='text-muted'>None</span>
                    </td>
                    <td>
                      <div className="text-center">
                      <Badge className="mr-1" color="primary">Anime</Badge>
                      <Badge className="mr-1" color="primary">Invest Soc</Badge>
                      <Badge className="mr-1" color="primary">Math Soc</Badge>
                      </div>
                    </td>
                    <td>
                      <div className='text-center'>
                      <div className="small text-muted">Last Event</div>
                      <strong> Math Soc Outing</strong>
                      </div>
                    </td>
                    <td className='mr-0 pr-0'>
                      <div className="small text-muted"><i className="fa fa-phone mr-1"></i> +65 91802872</div>
                      <div className="small text-muted"><i className="fa fa-envelope mr-1"></i> YipGum@u.nus.edu.sg</div>
                    </td>
                    <td className='pl-0 ml-0 mr-0 pr-0 text-center'>
                      <div className='mr-0'>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-pencil"></i></Button>
                      <Button  color='ghost-dark ' className='mr-1'><i className="fa fa-comments"></i> </Button>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-trash"></i> </Button>
                    </div>  
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-danger"></span>
                      </div>
                    </td>
                    <td>
                    <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>Year 2 Computer Science</span> 
                      </div>
                    </td>
                    <td className="text-center">
                      <span className='text-muted'>None</span>
                    </td>
                    <td>
                      <div className="text-center">
                      <Badge className="mr-1" color="primary">Anime</Badge>
                      <Badge className="mr-1" color="primary">Invest Soc</Badge>
                      <Badge className="mr-1" color="primary">Math Soc</Badge>
                      </div>
                    </td>
                    <td>
                      <div className='text-center'>
                      <div className="small text-muted">Last Event</div>
                      <strong> Math Soc Outing</strong>
                      </div>
                    </td>
                    <td className='mr-0 pr-0'>
                      <div className="small text-muted"><i className="fa fa-phone mr-1"></i> +65 91802872</div>
                      <div className="small text-muted"><i className="fa fa-envelope mr-1"></i> YipGum@u.nus.edu.sg</div>
                    </td>
                    <td className='pl-0 ml-0 mr-0 pr-0 text-center'>
                      <div className='mr-0'>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-pencil"></i></Button>
                      <Button  color='ghost-dark ' className='mr-1'><i className="fa fa-comments"></i> </Button>
                      <Button  color='ghost-dark' className='mr-1'><i className="fa fa-trash"></i> </Button>
                    </div>  
                    </td>
                  </tr>
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
