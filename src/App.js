import React from "react"; 
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import StudentLogin from "./components/StudentLogin.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import Register from "./components/Register.jsx";
import RetrieveSuccess from "./components/RetrieveSuccess.jsx";
import RegisterSuccess from "./components/RegisterSuccess.jsx";


function App() {
  return (
    <div className="App-header">
     <Router>
       <Switch>
        <Route exact path="/"  component={StudentLogin} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/RegisterSuccess" component={RegisterSuccess} />
        <Route exact path="/RetrieveSuccess" component={RetrieveSuccess} />
       </Switch> 
     </Router>
    
    </div>
  );
}

export default App;
