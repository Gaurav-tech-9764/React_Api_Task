import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar()
{

return(
<>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
   <Link  to="/"> <a class="navbar-brand" href="#">UMS</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/Addusers"><a class="nav-link active" aria-current="page" href="#">Add Users</a></Link>  
        </li>
        <li class="nav-item">
        <Link to="/Listusers"><a class="nav-link active" aria-current="page" href="#">List Users</a></Link>  
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</>


)


}
export default Navbar