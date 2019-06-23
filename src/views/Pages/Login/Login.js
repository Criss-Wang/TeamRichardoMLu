import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {
  Badge,Button,Card,CardBody,
  CardHeader,Col,Row,Fade, Nav
} from 'reactstrap';
import Icon from './Brand.png';
import bg from './bg.png';



export class Landing extends Component {
    render() {
        return (
            <Router>
                <div id='Landing'>
                    <div id="home" >
                        <Nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm p-3 mb-5 fixed-top">
                            <a className= "navbar-brand" href="#"><img id='brand' src={Icon} alt="Brand"/></a>
                            <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span className="navbar-toggler-icon"></span>
                            </Button>
                            <div className="collapse navbar-collapse" id='navbarResponsive'>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#registration">Registration</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#features">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#resources">Resources</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#documentation">documentation</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>
                                    <br/>
                                    <li className="nav-item">
                                        {/* <a href='/login' id = 'login' class="btn btn-outline-light"><i class="fas fa-sign-in-alt"></i> Login</a> */}
                                        <Button  id = 'login' class="btn btn-outline-light" type="button" data-toggle="modal" data-target="#login-modal"><i class="fas fa-sign-in-alt"></i> Login</Button>
                                    </li>
                                </ul>
                            </div>
                        </Nav>
                        <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modalCenter" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Login via</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body justify-content-center">
                                        <span class='modal-body-text'>NUSNET Login:</span>
                                        <a href='#nusnet login' id='login-student' class="btn btn-secondary" role="button">NUS-Student </a>
                                        <a href='#nusnet login' id='login-staff' class="btn btn-secondary" role="button">NUS-Staff </a>
                                        <hr id='modal-break'/>
                                        <span class='modal-body-text text-justify' id='social'>SOCIAL Login:</span>
                                        <a href='#facebook login' id='login-facebook' role="button"><i class="fa fa-facebook-square"></i> </a>
                                        <a href='#google login' id='login-google'  role="button"><i class="fa fa-google-plus-square fa-3x"></i></a>
                                        <a href='#twiiter login' id='login-twitter'  role="button"> <i class="fa fa-twitter-square fa-3x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="landing">
                            <div className="home-wrap">
                                <div className="home-inner"> 
                                </div>
                            </div>
                        </div>
                        <div className="caption text-center">
                            <h1>Welcome To MyPal</h1>
                            <h3>Your Smart, Simple, and Attractive central platform to manage your social relationships in NUS</h3>
                            <a className="btn btn-outline-light btn-lg" href="#registration">Get Started</a>
                        </div>
                    </div>
                
                    <div id="registration" className="offset">
                        <div className="col-12 narrow text-center">
                            <h1 id = 'reg' >Registration</h1>
                            <p className="lead">You can register via your NUSNET ID, which will make it more convenient to extract your Info</p>
                            <a className="btn btn-secondary btn-md" href="someweblink" target="_blank">NUS student</a>
                            <a className="btn btn-secondary btn-md" href="someweblink" target="_blank">NUS Staff</a>
                            <hr className='or-hr'/>
                            <h4 >OR</h4>
                            <hr className='or-hr'/>
                            <p className="lead">You can simply register via social account</p>
                            <a href='#facebook reg' id='reg-facebook' role="button"><i class="fab fa-facebook-square fa-4x reg-button"></i> </a>
                            <a href='#google reg' id='reg-google'  role="button"><i class="fab fa-google-plus-square fa-4x reg-button"></i></a>
                            <a href='#twiiter reg' id='reg-twitter'  role="button"> <i class="fab fa-twitter-square fa-4x reg-button"></i></a>

                        </div>
                    </div>
                

                    <div id="features" className="offset">

                        <div className="jumbotron">

                            <div className="narrow">
                                <div className="col-12 text-center">
                                    <h3 className="heading">Features</h3>
                                    <div className="heading-underline"></div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-md-4">
                                        <div className="feature">
                                            <i className="fas fa-play-circle fa-4x" data-fa-transform="shrink-3 up-5"></i>
                                            <h3>Custom Animation</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sunt enim, ipsum non voluptas saepe aspernatur aliquam fuga iusto dolore pariatur porro, eveniet tempore, laudantium veniam quae illo vitae? Sint.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="feature">
                                            <i className="fas fa-sliders-h fa-4x" data-fa-transform="shrink-4.5 up-4.5"></i>
                                            <h3>Custom Animation</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sunt enim, ipsum non voluptas saepe aspernatur aliquam fuga iusto dolore pariatur porro, eveniet tempore, laudantium veniam quae illo vitae? Sint.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="feature">
                                            <i className="fab fa-wpforms fa-4x" data-fa-transform="shrink-4 up-5"></i>
                                            <h3>Content slider</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sunt enim, ipsum non voluptas saepe aspernatur aliquam fuga iusto dolore pariatur porro, eveniet tempore, laudantium veniam quae illo vitae? Sint.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                    <div id="resources" className="offset">
                        <div className="fixed-background">
                            <div className="row dark text-center">
                                <div className="col-12">
                                    <h3 className="heading">Resources</h3>
                                    <div className="heading-underline"></div>
                                </div>
                                <div className="col-md-4">
                                    <h3>again</h3>
                                    <div className="feature">
                                        <i className="fas fa-code fa-3x"></i>
                                    </div>
                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                                <div className="col-md-4">
                                    <h3> slider</h3>
                                    <div className="feature">
                                        <i className="fas fa-bold fa-3x"></i>
                                    </div>
                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                                <div className="col-md-4">
                                    <h3>Content </h3>
                                    <div className="feature">
                                        <i className="fab fa-css3 fa-3x"></i>
                                    </div>
                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                            </div>

                            <div className="fixed-wrap">
                                <div className="fixed">
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="documentation" className="offset">
                        <div className="jumbotron">
                            <div className="col-12 text-center">
                                <h3 className="heading">documentations</h3>
                                <div className="heading-underline"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 documentations">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={bg} alt="documentation1" />
                                        </div>
                                        <div className="col-md-8">
                                            <blockquote>
                                                <i className="fas fa-quote-left"></i>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, amet dolores. Repellat eos, amet culpa dolorum officia deserunt saepe, ipsam nemo consequuntur quis, blanditiis excepturi facere mollitia! Debitis, incidunt commodi?
                                                <hr className="documentations-hr"/>
                                                <cite>&#8212; Eric, Me</cite>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 documentations">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={bg} alt="documentation2" />
                                        </div>
                                        <div className="col-md-8">
                                            <blockquote>
                                                <i className="fas fa-quote-left"></i>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, amet dolores. Repellat eos, amet culpa dolorum officia deserunt saepe, ipsam nemo consequuntur quis, blanditiis excepturi facere mollitia! Debitis, incidunt commodi?
                                                <hr className="documentations-hr"/>
                                                <cite>&#8212; Pamela, she</cite>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 narrow text-center">
                            <p className="lead"> This is an ending part</p>
                            <a className="btn btn-secondary btn-md" href="somelinkhere">Gothca</a>
                        </div>
                    </div>



                    <div id="contact" className="offset">
                        <footer>
                            <div className="row justify-content-center">
                                <div className="col-md-5 text-center">
                                    <img src={Icon} alt="nunopic" />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ipsam exercitationem earum eius iusto voluptatibus quae a nesciunt deserunt, similique, provident officia fugiat voluptate possimus tenetur! Repellendus, itaque temporibus.</p>
                                    <strong>Contact Info</strong>
                                    <p>1234567 <br/> email@gmail.com</p>
                                    <a href="#" target='_blank'><i className="fab fa-facebook-square"></i></a>
                                    <a href="#" target='_blank'><i className="fab fa-twitter-square"></i></a>
                                    <a href="#" target='_blank'><i className="fab fa-instagram"></i></a>
                                </div>
                                <hr className="socket" />
                                &copy; Mypal.
                            </div>
                        </footer>
                    </div>
                </div>
            </Router>
        
        )
    }
}

export default Landing
