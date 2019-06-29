/* import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'


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

class Analysis extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
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

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
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
        </Row>
      </div>
    );
  }
}

export default Analysis;
 */