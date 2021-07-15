import {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import axios from "axios"


function ListUser(props) {
console.log(props)
var [users , setUsers] = useState([])



useEffect(()=>{
            
    axios({
            method:"GET",
            url: "/Showusers"
         }).then((response)=>{

        setUsers(response.data)
      
    },(error)=>{
    })
    },[] )

const deleteUser = (id) =>{
  axios({
    method:"GET",
    url: '/Deleteusers/'+id,
 }).then((response)=>{

alert(response.data)


window.location.reload();

},(error)=>{
  })
  }

console.log('test111',users  )


    return(

        <>
        <div class="container">
    <div class="col-sm-12 btn btn-primary" >  
                    Users List
    </div> 
    <div  class="card o-hidden border-0 shadow-lg my-5">
        
       <table className="table table-dark  border shadow">
    <thead>
      <tr>
      <th scope="col">Sr. No.</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Edit</th>
    
        <th scope="col">Delete</th>
      </tr>
    </thead>
  <tbody>
  {users.map((each,index)=>{
                return (
                  <tr>

                  <td scope="col">{index + 1}</td>
                  <td scope="col">{each.name}</td>
                  <td scope="col">{each.email}</td>
                  <td scope="col">{each.phone_number}</td>
                  <td scope="col"><Link to={'/UserDetails/'+each.id}><button className="btn btn-outline-info btn-sm" type="submit">Edit</button></Link> </td>
                  <td scope="col"><button className="btn btn-outline-danger btn-sm" onClick={() => deleteUser(each.id)} type="submit">Delete</button></td>


                  </tr>
                     )
              }
          )}
    </tbody>
  </table> 
  </div> 

  </div>
        </>
    )
    
}

export default ListUser 