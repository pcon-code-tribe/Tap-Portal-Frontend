import React from "react";
import {Button} from 'react-bootstrap';
import'bootstrap/dist/css/bootstrap.css';
import {useHistory} from "react-router-dom";

// this component showed after registration details submitted

function RegisterSuccess(){
  const history=useHistory();
    return(
        <div style={{height:"100%",backgroundColor:"#FFEFD5",textAlign:"center"}}>
          <h2 style={{paddingTop:"5%"}}>User registered successfully!!</h2>
          <br></br>
          <Button variation="primary" type="button" size="lg" onClick={()=> history.push('/')}>back</Button>
        </div>
    );
}
export default RegisterSuccess;