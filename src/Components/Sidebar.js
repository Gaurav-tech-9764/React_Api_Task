import { BrowserRouter, Route, Link } from "react-router-dom";

function Sidebar(params) {

    return(
<>


{/* <!-- Left side column. contains the logo and sidebar --> */}
  <aside className="main-sidebar">
    {/* <!-- sidebar: style can be found in sidebar.less --> */}
    <section className="sidebar">
    <ul className="sidebar-menu" data-widget="tree">
    <li class="header">MAIN NAVIGATION</li>
        <li >
        <Link to="/"><i className="fa fa-dashboard"></i> <span>Dashboard</span></Link>
        
        </li>
        <li>
        <Link to="/Addusers"><i className="glyphicon glyphicon-user"></i> <span>Add Users</span></Link>
        </li>
     
        <li>
        <Link to="/Listusers"><i className="fa fa-th"></i> <span>List Users</span></Link>
        </li>
      

    
     
        
        
      </ul>
    </section>
    {/* <!-- /.sidebar --> */}
  </aside>
</>

    )
    
}

export default Sidebar