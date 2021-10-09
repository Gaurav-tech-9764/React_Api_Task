import {useEffect, useState} from "react"
import { Link, withRouter } from "react-router-dom";
import axios from "axios"
import { connect } from "react-redux";


function ListUser(props) {
console.log(props)
var [users , setUsers] = useState([])



    useEffect (() => {

      setUsers(props.test)
      
       },[props.len])


const deleteUser = (id) =>{
  axios({
    method:"GET",
    url: '/Deleteusers/'+id,
 }).then((response)=>{

  alert(response.data)

      props.dispatch({
      type:"DELETEUSERS",
      payload:{
        data:id
      }
   })
},(error)=>{
  })
  }

console.log('test111',props.test  )


    return(

        <>
<div className="wrapper">
  <div className="content-wrapper" style={{minHeight: "1126px"}}>
    <section className="content">
      <div className="row">
        <div className="container">
          <div className="col-sm-6 col-8 col-lg-12">
          <div className="col-sm-12 btn btn-primary" >  
                    Users List
          </div> 
        <div  className="card o-hidden border-0 shadow-lg my-5">
          <table className="table table-dark  border shadow">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
              <tbody>
                  {typeof users!=undefined && users.map((each,index)=>{
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{each.name}</td>
                        <td>{each.email}</td>
                        <td>{each.phone_number}</td>
                        <td><Link to={'/UserDetails/'+each.id}><button className="btn btn-outline-success btn-sm" type="submit">Edit</button></Link> </td>
                        <td><button className="btn btn-outline-danger btn-sm" onClick={() => deleteUser(each.id)} type="submit">Delete</button></td>
                      </tr>
                        )}
                      )}
                </tbody>
            </table> 
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


ListUser = withRouter (ListUser);
export default connect ((state)=>{
  return{

   test:state.Users,
    len: state.total
  }

})(ListUser) ;