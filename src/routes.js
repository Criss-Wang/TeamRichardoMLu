import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Contact = React.lazy(() => import('./views/Contact'));
const Analysis = React.lazy(() => import('./views/Analysis'));
const Groups = React.lazy(() => import('./views/Groups'));
const Landing = React.lazy(() => import('./views/Pages/Landing'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' }, //What is the component here?
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/analysis', name: 'Analysis', component: Analysis },
  { path: '/groups', name: 'Groups', component: Groups },
  { path: '/landing', name: 'Landing', component: Landing },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];



export default routes;
