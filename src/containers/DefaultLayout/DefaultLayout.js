import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import {
  AppFooter,AppHeader, AppSidebar, AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,} from '@coreui/react';

// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

// Footer and Header
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.updateInfo = this.updateInfo.bind(this);
    this.state = {
      contactUpdated: false,
    }
  }

  updateInfo(bool){
    console.log(bool)
    this.setState({contactUpdated: bool,})
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
  // Signout Logic
  signOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        {/* App header component */}
        <AppHeader fixed className='frameheader shadow'>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)} 
                           contactUpdated={this.state.contactUpdated}
                           updateInfo={this.updateInfo}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          {/* App sidebar for page display selection */}
          <AppSidebar fixed display="lg">
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb className='shadow-sm' appRoutes={routes} router={router}/>
            {/* route based on the selection on the sidebar */}
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} 
                                            contactUpdated={this.state.contactUpdated}
                                            updateInfo={this.updateInfo}/>
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        {/* App Footer section */}
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
