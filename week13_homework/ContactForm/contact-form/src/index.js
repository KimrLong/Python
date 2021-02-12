import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './assets/style.css';
import App from './App';
import ContactForms from './components/ContactForms'
import BaseLayout from './components/layout/BaseLayout';
import Parent from './components/liftingState/Parent';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

const NoMatch = () => <div>Error: Could Not Find Route</div>


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/contact_forms' component={ContactForms}/>
        <Route component={NoMatch}/>
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

