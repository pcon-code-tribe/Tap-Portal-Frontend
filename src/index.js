import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import StudentLogin from "./components/StudentLogin.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";

import RetrieveSuccess from "./components/RetrieveSuccess.jsx";

import AdminLayout from "./App.js";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>

    <Switch>
    <Route exact path="/"  component={StudentLogin} />
    <Route exact path="/forgotPassword" component={ForgotPassword} />
   
    <Route exact path="/RetrieveSuccess" component={RetrieveSuccess} />
    <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
    
  </BrowserRouter>,
  document.getElementById("root")
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
