import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import { Link } from "react-router-dom";

function UserDetails(props) {


        var para = useParams()
    
        var [errors, setErrors] = useState([])
        const [user, setUser] = useState({
          name: "", 
          email: "",
          phone_number: "",
          password: ""
        });
      
        const { name,email, phone_number, password } = user;
        const onInputChange = e => {
          setUser({ ...user, [e.target.name]: e.target.value });
        };
        
     

        useEffect(() => {
            let url
            console.log(para)
            if(para){
                url='/user/'+para.uid;
               
           axios({url:url, method:"get"}).then((response)=>{
                console.log('response.....',response)
                
                setUser(response.data)
                 
             },(error)=>{
    
                    alert("Can not fetch data")
                  })
    

            }

        },[])
      
        const handelSubmit = (e) => {
            e.preventDefault();

     

            var data = {name: name, email: email, phone_number: phone_number, password: password}
          axios({
                url: '/Updateusers/'+para.uid,
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
                 window.location.reload()
                 }
           }, err => {})


        }

        console.log('this is user',user)

     
    return(

        <>

<div className="wrapper">
  <div className="content-wrapper" style={{"min-height": "1126px;"}}>

  <section className="content">
      <div className="row">
<div className="container">
<div className='py-2'>
<Link to="/Listusers"><button className="btn btn-info btn-sm" type="submit">Back</button></Link>
   </div>
    <div className="col-sm-12 btn btn-primary" >  
                     View or Update user
    </div> 
   
     <div  className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-4" >

        <form id="AddUserForm" onSubmit={handelSubmit}>
            <div className="form-group" >
         <label for="name">Name:</label>
             <input type="text"  name="name" value={name} onChange={e => onInputChange(e)} className="form-control" placeholder="Name" id="name"  />
             <div className="text-danger">{errors.name}</div>    
        </div>
 <div className="form-group"> 
     <label for="email">Email Address:</label>
   <input type="text"  name="email" value={email} className="form-control" onChange={e => onInputChange(e)}  placeholder="Enter email" id="email" />
   <div className="text-danger">{errors.email}</div>
   </div>
  <div className="form-group" >
   <label for="phone_number">Number:-</label>
       <input type="text"  name="phone_number" value={phone_number} className="form-control" onChange={e => onInputChange(e)} placeholder="Phone Number" id="phone_number" />
       <div className="text-danger">{errors.phone_number}</div>
</div>
<div className="form-group">
 <label for="password">Password:</label>
  <input type="text"  name="password" className="form-control" value={password} onChange={e => onInputChange(e)} placeholder="Password" id="password" />
  <div className="text-danger">{errors.password}</div>  
 
 </div>
<br></br>
&nbsp;
&nbsp;

  <input type="submit" value="Update User" className="btn btn-success" />
 
 </form>
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
    
export default UserDetails