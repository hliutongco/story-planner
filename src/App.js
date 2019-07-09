import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './auth/Home'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Landing from './auth/Landing'
import Navigation from './Navigation'
import * as ROUTES from './routes';

function App(props) {

  return (
    <Fragment>
      <Router>
        <Navigation/>
        <Route exact path={ROUTES.LANDING} component={Landing}/>
        <Route path={ROUTES.SIGN_UP} component={SignUp}/>
        <Route path={ROUTES.SIGN_IN} component={SignIn}/>
        <Route path={ROUTES.HOME} component={Home}/>
      </Router>
    </Fragment>
  );
}

export default App;
