import {useState} from "react"
import axios from "axios"

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
         alert(response.data.Success)
         props.history.push('/Listusers')
         }
   }, err => {})

    
  

 }
  return(

        <>


<div class="container">
    <div class="col-sm-12 btn btn-primary" >  
                     Add user
    </div> 
     <div  class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-4" >

        <form id="AddUserForm" onSubmit={handelSubmit}>
            <div class="form-group" >
         <label for="name">Name:</label>
             <input type="text"  name="name" onChange={e => setName(e.target.value)} class="form-control" placeholder="Name" id="name"  />
            <div class="text-danger">{errors.name}</div>
        </div>
 <div class="form-group"> 
     <label for="email">Email Address:</label>
     <input type="text"  name="email" class="form-control" onChange={e => setEmail(e.target.value)}  placeholder="Enter email" id="email" />
     <div class="text-danger">{errors.email}</div>
   </div>
  <div class="form-group" >
   <label for="phone_number">Number:-</label>
       <input type="text"  name="phone_number" class="form-control" onChange={e => setNumber(e.target.value)}  placeholder="Phone Number" id="phone_number" />
       <div class="text-danger">{errors.phone_number}</div>
</div>
<div class="form-group">
 <label for="password">Password:</label>
  <input type="password"  name="password" class="form-control" onChange={e => setPassword(e.target.value)}   placeholder="Password" id="password" />
 <div class="text-danger">{errors.password}</div>
 
 </div>
<br></br>
&nbsp;
&nbsp;

  <input type="submit" value="Add User" class="btn btn-success" />
 
 </form>
 </div>
 </div>
 </div>




        </>
    )
}

export default Addusers