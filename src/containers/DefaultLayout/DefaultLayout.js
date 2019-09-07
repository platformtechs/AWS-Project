import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import {AdminNav,  subAdminNav, UserNav} from '../../_nav';
// routes config
import routes from '../../routes';
import { authToken, userType, userInfo } from '../../api';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
      nav: null
    }
  }
  

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut = async (e) => {
    e.preventDefault()
    try {
      console.log("logout")
      await localStorage.removeItem(authToken);
      await localStorage.removeItem(userInfo);
      await localStorage.removeItem(userType);
      this.props.history.push('/login')
    } catch (error) {
      console.log("err", error)
      alert("error")
    }
    
  }

  componentWillMount(){
    this.loadNav()
  }

  loadNav = async() => {
    console.log("hi there");
    let usertype = await localStorage.getItem(userType)
    switch (usertype) {
      case 'ADMIN':
        this.setState({nav:AdminNav})
        break
      case 'SUBADMIN':
        this.setState({nav:subAdminNav})
        break
      default:
        this.setState({nav:UserNav})
    }
  }

  render() {
    console.log("state", this.state);
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={this.signOut}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            {this.state.nav && <AppSidebarNav navConfig={this.state.nav } {...this.props} router={router}/>}
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
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
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/login" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          {/* <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside> */}
        </div>
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
