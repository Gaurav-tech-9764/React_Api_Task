import {useState} from "react"
import axios from "axios"
import { connect } from "react-redux"

function Addusers(props){

var [name, setName] = useState('')
var [email , setEmail] = useState('')
var [Number , setNumber] = useState('')
var [password ,setPassword] = useState('')
var [errors, setErrors] = useState([])
 
const handelSubmit = (e) =>{
  
  e.preventDefault();

     

    var data = {name: name, email: email, phone_number: Number, password: password}
    axios({
        url: '/Createusers',
        method: "POST", 
        data: data,
        headers: { 'Content-Type': 'application/json'}
       }).then(response => {
         if(response.data.status == 0){
          console.log('respo.....',response.data.errors.name)
          setErrors(response.data.errors)
       }
         else{

          var data3=response.data.UserInsert
          console.log("this is the latest data3.......",data3)
       props.dispatch({
         type:"ADDUSERS",
         payload:{
           data:data3
         }
        
      })
         props.history.push('/Listusers')
         }
   }, err => {})

    
  

 }
  return(
<>
<div className="wrapper">
  <div className="content-wrapper" style={{minHeight: "1126px"}}>
    <section className="content">
      <div className="row">
        <div className="container">
          <div className="col-sm-6 col-8 col-lg-12">
            <div className="col-sm-12 btn btn-primary" >  
                     Add user
            </div> 
        <div  className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-4" >
            <form id="AddUserForm" onSubmit={handelSubmit}>
                <div className="form-group" >
                  <label for="name">Name:</label>
                  <input type="text"  name="name" onChange={e => setName(e.target.value)} className="form-control" placeholder="Name" id="name"  />
                  <div className="text-danger">{errors.name}</div>
                </div>
                <div className="form-group"> 
                  <label for="email">Email Address:</label>
                  <input type="text"  name="email" className="form-control" onChange={e => setEmail(e.target.value)}  placeholder="Enter email" id="email" />
                  <div className="text-danger">{errors.email}</div>
                </div>
                <div className="form-group" >
                  <label for="phone_number">Number:-</label>
                  <input type="text"  name="phone_number" className="form-control" onChange={e => setNumber(e.target.value)}  placeholder="Phone Number" id="phone_number" />
                  <div className="text-danger">{errors.phone_number}</div>
                </div>
                <div className="form-group">
                  <label for="password">Password:</label>
                  <input type="password"  name="password" className="form-control" onChange={e => setPassword(e.target.value)}   placeholder="Password" id="password" />
                  <div className="text-danger">{errors.password}</div>
 
                </div>
                    <br></br>
                    &nbsp;
                    &nbsp;

                 <input type="submit" value="Add User" className="btn btn-success" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</div>
        </>
    )
}

export default connect() (Addusers) 