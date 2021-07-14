
import './App.css';
import Navbar from './Components/Navbar';

import  {BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import Addusers from './Components/Addusers';
import Home from './Components/Home';
import ListUser from './Components/ListUser';
import UserDetails from './Components/UserDetails';


function App() {
  return (
    <>
  <div>
        <Router>
                <Navbar ></Navbar>
                <br></br>
          <Switch>
               <Route exact path="/" component={Home}></Route>
                <Route exact path="/Addusers" component={Addusers}></Route>
              <Route exact path="/Listusers" component={ListUser}></Route>
              <Route exact path="/UserDetails/:uid" component={UserDetails}></Route>
                  {/* <Route exact path="/AddCake" component={AddCake}></Route>
              */}
           </Switch>
          </Router>
       </div>

    </>
  
  );
}

export default App;
