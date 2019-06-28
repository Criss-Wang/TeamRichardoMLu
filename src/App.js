import React, { Component } from 'react';
import { HashRouter, Route, Switch, Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Landing = React.lazy(() => import('./views/Pages/Landing/Landing'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
//const Landing = React.lazy(() => import('./views/Landing/Landing'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Login: true,
    };
  }
 
  render() {
    return (
      <div>
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/Landing" name="Landing Page" render={props => <Landing {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
      </div>
    );
  }
}

export default App;
