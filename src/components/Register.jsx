import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import'bootstrap/dist/css/bootstrap.css';
import collegeLogo from "../images/collegeLogo.png"

//component for user registration
function Register(){
  //adding useState and useHistory states to component
 const history=useHistory();
 const [RegisterDetails,setRegisterDetails] = useState({
   regNo:"",
   stName:"",
   email:"",
   mobNo:"",
   branch:"",
   gender:"",
   phNo:""
   });

   //triggered on change of respective fields
   function handleChange(event){
     const {name,value} = event.target;
     setRegisterDetails(previous=>{
        return {
          ...previous,
          [name]:value
        };
     });
   }

   //triggered when form submitted
   function handleSubmit(event){
     event.preventDefault();
     console.log(RegisterDetails);  //console logging the registration details provided
     setRegisterDetails({
      regno:"",
      stName:"",
      email:"",
      mobNo:"",
      branch:"",
      gender:"",
      phNo:""
     })
    
     history.push('/RegisterSuccess'); //redirecting to RegisterSuccess page 
   }
  
    return(
      //code of register page layout starts
         <div className="bg-light">
            <div className="container">
               <div className="py-5 text-center">
                 {/* for college logo and name */}
                  <div className="brand">
                    <img src={collegeLogo} alt="logo"></img>
                    <p className="brand-name">NITJSR Placement Portal</p>
                 </div>
               </div>

           <div className="col-md-8 order-md-1">
               <h4 className="mb-3">Sign Up Form</h4>
               <form className="needs-validation" onSubmit={handleSubmit}>
                 {/* for registration number field */}
                 <div className="mb-3">
                   <label>Registration number</label>
                   <input type="text" className="form-control" name="regNo" onChange={handleChange} value={RegisterDetails.regNo} placeholder="registration no" required /> 
                 </div>
                 {/* for student name field */}
                <div className="mb-3">
                  <label>Student Name</label>
                  <div className="input-group">
                    <input type="text" className="form-control" name="stName" onChange={handleChange} value={RegisterDetails.stName} placeholder="name" required />
                 </div>
                </div>
                 {/* for email field */}
               <div className="mb-3">
                 <label>Email</label>
                 <input type="email" className="form-control" name="email" onChange={handleChange} value={RegisterDetails.email} placeholder="email"  required />
               </div>
                 {/* for mobile no field */}
              <div className="mb-3">
                <label>mobile no</label>
                <input type="tel" className="form-control" name="mobNo" onChange={handleChange} value={RegisterDetails.mobNo} placeholder="mobile no"  required />
              </div>
                 {/* for branch field ,branches yet to be added */}
            <div className="row">
                <div className="col-md-5 mb-3">
                <label>Branch</label>
                <select className="custom-select d-block w-100" name="branch" onChange={handleChange} value={RegisterDetails.branch} required>
                  <option>Select</option>
                  <option value="Branch">Branch</option>
                </select>
              </div>
                 {/* for gender field */}
              <div className="col-md-4 mb-3">
                <label>Gender</label>
                <select className="custom-select d-block w-100" name="gender" onChange={handleChange} value={RegisterDetails.gender} required>
                  <option>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>           
              </div>
                 {/* for phone no field */}
              <div className="col-md-3 mb-3">
                <label>ph number</label>
                <input type="tel" className="form-control" name="phNo" onChange={handleChange} value={RegisterDetails.phNo} placeholder="" required />
             
              </div>
           </div>
        <hr className="mb-4" />
        {/* form submittion button */}
        <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
      </form>
    </div>
  </div>
</div>




    );
}

export default Register;


