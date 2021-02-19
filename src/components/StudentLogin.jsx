import React,{useState} from "react";
import {Button,Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import'bootstrap/dist/css/bootstrap.css';
import collegeLogo from '../images/collegeLogo.png';

// for Student login page 

function StudentLogin(){
   
   //adding state to component

   const [LoginDetails,setLoginDetails]=useState({
      email:"",
      password:""
   })

   //triggered on change of respective fields
   function handleChange(event){
      const {name,value} = event.target;
      setLoginDetails(previous=>{
         return{
            ...previous,
            [name]:value
         };
      });
   }

   //triggered on form submission
   function handleSubmit(event){
      event.preventDefault();
      console.log(LoginDetails);  // console logging the form data 
      setLoginDetails({
         email:"",
         password:""
      });
   }

     return(
        // code for Student login page starts
         <div className="bg">
            {/* for college name and logo */}
             <div className="brand">
                <img src={collegeLogo} alt="logo"></img>
                <p className="brand-name">NITJSR Placement Portal</p>
             </div>
             <div className="col-md-4 login">
                <Form onSubmit={handleSubmit}>
                   {/* email field */}
                   <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" value={LoginDetails.email} onChange={handleChange} name="email" style={{color:"black"}} placeholder="Enter email" required />
                   </Form.Group>
                   {/* password field */}
                   <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" value={LoginDetails.password} onChange={handleChange} name="password" placeholder="Password" style={{color:"black"}} required />
                   </Form.Group>
                   {/* this link takes to forgot password page */}
                   <Form.Group controlId="formBasicCheckbox">
                      <Form.Text><Link style={{color:"white"}} to="/forgotPassword">Forgot passward</Link></Form.Text>
                   </Form.Group>
                    
                  {/* form submit button */}
                   <Button variant="success" size="lg" block type="submit">
                   Sign in
                   </Button>
                   <Form.Text>Click <Link style={{color:"white",textDecoration:"underline"}} to="/register">here</Link> to register</Form.Text>
                  
               </Form>
            
          </div>
          {/* adding footer */}
          <footer style={{textAlign:"center",color:"white",fontSize:"10px"}}>Pic-Credit@Phocus</footer>

         </div>  
               
         
     );   
 
}

export default StudentLogin;