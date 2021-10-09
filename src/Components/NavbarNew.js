import { BrowserRouter, Route, Link } from "react-router-dom";

function NavbarNew(params) {

    return(

        <>
     <header className="main-header">
    {/* <!-- Logo --> */}
    <a href="index2.html" className="logo">
      {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
      <span className="logo-mini"><b>U</b>MS</span>
      {/* <!-- logo for regular state and mobile devices --> */}
      <span className="logo-lg"><b>User</b>Management</span>
    </a>
    {/* <!-- Header Navbar: style can be found in header.less --> */}
    <nav className="navbar navbar-static-top">
      {/* <!-- Sidebar toggle button--> */}
      <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
    {/* <!-- User Account: style can be found in dropdown.less --> */}
    <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <img src="../dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
              <span className="hidden-xs">Gaurav Admin </span>
            </a>
            <ul className="dropdown-menu">
              {/* <!-- User image --> */}
              <li className="user-header">
                <img src="../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />

                <p>
                  Gaurav Admin - Web Developer
                  <small>Member since Nov. 2021</small>
                </p>
              </li>
              {/* <!-- Menu Body --> */}
             
              {/* <!-- Menu Footer--> */}
              <li className="user-footer">
               
                <div className="pull-right">
                  <a href="#" className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          {/* <!-- Control Sidebar Toggle Button --> */}
          
        </ul>
      </div>
    </nav>
  </header>
        </>
    )
    
}

export default NavbarNew