import './App.css';
import  {BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import Addusers from './Components/Addusers';
import Home from './Components/Home';
import ListUser from './Components/ListUser';
import UserDetails from './Components/UserDetails';
import Login from './Components/Login';
import NavbarNew from './Components/NavbarNew';
import Sidebar from './Components/Sidebar';
import {useEffect} from "react"

import axios from "axios"
import { connect } from "react-redux";


function App(props) {

  useEffect(()=>{
  axios({                                                                                                                                                                                      
          url: "/Showusers"
 }).then((response)=>{
        var data3=response.data
                console.log("this is the latest data3.......",data3)
            props.dispatch({
              type:"LISTUSERS",
              payload:{
                data:data3
              }
              
            })},(error)=>{
        })
    },[] )

  return (
    <>
  <div>
        <Router>
              <NavbarNew></NavbarNew>
              <Sidebar></Sidebar>
                <br></br>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/Addusers" component={Addusers}></Route>
              <Route exact path="/Listusers" component={ListUser}></Route>
              <Route exact path="/UserDetails/:uid" component={UserDetails}></Route>
                  <Route exact path="/Login" component={Login}></Route>
             
           </Switch>
          </Router>
       </div>

    </>
  
  );
}

export default connect ((state)=>{

  return{
    Users:state.Users,
len:state.total


  }


})(App) ;