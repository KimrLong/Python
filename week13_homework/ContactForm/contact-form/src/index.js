import React from 'react';
import ReactDOM from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import './assets/style.css';

// import ContactForms from './components/ContactForm'
// import BaseLayout from './components/layout/BaseLayout';
// import Parent from './components/liftingState/Parent';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faTrash, faPencilAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far, faCheckSquare, faTrash, faPencilAlt, faStar)

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

const NoMatch = () => <div>Error: Could Not Find Route</div>


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

