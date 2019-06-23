import React, { Component, lazy, Suspense } from 'react';
import {
  Badge,Button,ButtonDropdown, Card,CardBody,
  CardHeader, Col, DropdownItem, DropdownMenu,
  DropdownToggle, Row,Table, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import Pagecomponent from './Pagecomponent/Pagecomponent';
import data from './Pagecomponent/tsconfig.json';
import Axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: new Array(2).fill(false),
      radioSelected: 2,
      dataList: [],
      pageConfig: {
        totalPage: data.length //总页码
      },
      delete: false,
      export: false,
    };
    this.toggleExport= this.toggleExport.bind(this);
    this.toggleDelete= this.toggleDelete.bind(this);
    this.toggledrop = this.toggledrop.bind(this);
    this.getCurrentPage = this.getCurrentPage.bind(this);
//    this.getData = this.getData.bind(this);
  }

 /*  getData(){
    Axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res.data.length);
            this.setState(
              { data: res.data,
                pageConfig: {
                    totalPage: res.data.length, 
                },
            })
            console.log(this.pageConfig[totalPage])
        })
        .catch(err =>{
            console.log(err);
        })
};
  componentDidMount(){
    this.getData();
  } */

  getCurrentPage(currentPage) {
      this.setState({
          dataList: data[currentPage-1].name,
      })
  }

  toggledrop(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
  }
  toggleDelete() {
    this.setState({
      delete: !this.state.delete,
    });
  }
  toggleExport() {
    this.setState({
      export: !this.state.export,
    });
  }


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
/*     let {trailsList, chooseTrail} = this.props;
    let activePageInt = parseInt(this.state.activePage, 10);
    let itemsPerPageInt = parseInt(this.state.itemsPerPageInt, 10);
    var indexOfLastTrail = activePageInt * itemsPerPageInt;
    var indexOfFirstTrail = indexOfLastTrail - this.state.itemsPerPage + 1;
    var renderedTrails = trailList.slice(indexOfFirstTrail, indexOfLastTrail);
 */
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <h1 className="h3 mb-3 text-gray-800">Contacts</h1>
            <Card className="card-accent-info shadow-sm">
              <CardHeader>
                <i className="fa fa-align-justify"></i> Contact Book
                <Badge className="mr-1 ml-3" color="primary">Anime</Badge>
                <div className="card-header-actions">
                <ButtonDropdown className="mr-3 " isOpen={this.state.dropdownOpen[0]} toggle={() => { this.toggledrop(0); }}>
                  <DropdownToggle caret color="primary" className='float-right' size ='sm'>
                    Sort By 
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Types</DropdownItem>
                    <DropdownItem disabled>Action Disabled</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                <Button color="primary"  className="mr-3 " size='sm' onClick={this.toggleExport}>
                  <i className="fa fa-cloud-download"></i>&nbsp; Export
                </Button>
                <Modal isOpen={this.state.export} toggle={this.toggleExport}
                       className={'modal-info delete' + this.props.className} id='modalCenter'>
                        <ModalHeader toggle={this.toggleExport}><i className='fa fa-download mr-1' ></i> Download Options</ModalHeader>
                        <ModalBody className='modalbody text-center mt-2 mb-2'>
                          <Button color="primary" className='mr-4' onClick={this.toggleExport}>Excel Sheet (.xlsx)</Button>{' '}
                          <Button color="primary" className='mr-4' onClick={this.toggleExport}>PDF Doc (.pdf)</Button>{' '}
                          <Button color="primary" onClick={this.toggleExport}>Word Doc (.docx)</Button>
                        </ModalBody>
                      </Modal>
                </div>
              </CardHeader>
             <CardBody className=' pb-2 mb-0'>
                <Table hover responsive id="dataTable" className="table-outline mb-0 d-none d-sm-table">
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
                      <Button  color='ghost-dark' onClick={this.toggleDelete} className='mr-1'><i className="fa fa-trash"></i> </Button>
                      <Modal isOpen={this.state.delete} toggle={this.toggleDelete}
                       className={'modal-danger delete' + this.props.className} id='modalCenter'>
                        <ModalHeader toggle={this.toggleDelete}><i className='fa fa-warning mr-1' ></i> Warning</ModalHeader>
                        <ModalBody className='modalbody'>
                          <h5>Are You Sure to Delete this contact?</h5>
                          This will remove <strong>All</strong> the information related to namehere
                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger" onClick={this.toggleDelete}>Delete</Button>{' '}
                          <Button color="secondary" onClick={this.toggleDelete}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
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
                <Row className='mt-4'>
                  <Col md='3' className='pagi-header pl-4'>
                   <strong>1-10 out of 57</strong>
                  </Col>
                  <Col md='9' className='text-right mr-0 '>
                  <Pagecomponent pageConfig={this.state.pageConfig}
                               pageCallbackFn={this.getCurrentPage}/>
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

export default Contact;
