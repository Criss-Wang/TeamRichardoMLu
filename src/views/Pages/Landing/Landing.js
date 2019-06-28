import React, { Component } from 'react'
import { Container, NavItem, InputGroup, InputGroupAddon, InputGroupText, Input, Nav, Button,  } from 'reactstrap';
import Icon from './Brand.png';
import bg from './bg.png';
import {
    AppFooter,AppHeader, AppNavbarBrand, AppSidebarToggler,
    AppBreadcrumb2 as AppBreadcrumb,
    AppSidebarNav2 as AppSidebarNav,} from '@coreui/react';


export class Landing extends Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.state = {
          modal: false,
        };
      }
    
    onLogin(e) {
        e.preventDefault()
        this.props.history.push('/register')
    }; 

    render() {
        return (
            <div className="app">
               
                <AppHeader fixed className='frameheader shadow'>
                    <AppSidebarToggler className="d-lg-none" display="md" mobile />
                    {/* Shrinkable Brand */}
                    <AppNavbarBrand
                    full={{ src: Icon, width: 140, height: 35, alt: 'MyPal Logo' }}
                    minimized={{ src: Icon, width: 34, height: 34, alt: 'MyPal Logo' }}
                    className='pl-2'/>
                    <Nav className="d-md-down-none ml-auto mr-5" navbar>
                    <NavItem>
                        <Button color='primary' onClick={e=>this.onLogin(e)} 
                        className="mr-1 add-btn d-md-down-none"><i class="fa fa-sign-in"></i>
                        &nbsp; Register{' & '}Login </Button>
                    </NavItem>
                    </Nav>
                </AppHeader>
                <div className="app-body landing-app-body">
                <main className="main landing">
                    <Container fluid>
                    <div className="caption text-center">
                        <h1>Welcome To MyPal</h1>
                        <h3 className='shadow mb-4'>Your Smart, Simple, and Attractive central platform to manage your social relationships in NUS</h3>
                        <Button color='secondary' size='lg' outline onClick={e=>this.onLogin(e)} 
                        className="mr-1 start-btn d-md-down-none">
                         Get Started </Button>      
                         <div className='footertext2 mt-4 ml-0'> <a href="https://github.com/Criss-Wang/TeamRichardoMLu" disabled><i className='fa fa-github UrlLink'></i></a>&nbsp; 2019 NUS Orbital Project: MyPal  </div>
              
                    </div>
                    </Container>
                </main>
                <div className='mt-auto Landingf'>
                    
                    <span className="ml-auto footertext mr-3 mb-3">Powered by <a href="" disabled>CoreUI</a></span>
                </div>
                </div>

            </div>
        
        )
    }
}

export default Landing
