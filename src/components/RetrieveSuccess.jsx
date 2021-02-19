import React from "react";
import {Button} from 'react-bootstrap';
import'bootstrap/dist/css/bootstrap.css';
import {useHistory} from "react-router-dom";

// this component showed after email to retrieve password is submitted

function RetrieveSuccess(){
  const history=useHistory();
    return(
        <div style={{height:"100%",backgroundColor:"#FFEFD5",textAlign:"center"}}>
          <h2 style={{paddingTop:"5%"}}>Password sent successfully!!</h2>
          <br></br>
          <Button variation="primary" type="button" size="lg" onClick={()=> history.push('/')}>back</Button>
        </div>
    );
}
export default RetrieveSuccess;