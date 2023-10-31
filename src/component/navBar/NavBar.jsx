import './navBar.css'
import {Link} from "react-router-dom";
const NavBar = () =>{

    return(
        <div class="nav-main-container">
          <div className="inner-container" >
              <h4>TimeKeper</h4>
              <div className="navBarFields">
                 <ul>
                   <li><a href="#">Home</a></li>
                     <Link to="/login">Login</Link>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Contact Us</a></li>
                     <li><a href="#">Blog</a></li>
                     <div className="buttons">
                         <Link to="/sign_up">
                         <button>
                             Sign up</button>
                         </Link>
                     </div>
                     <div className="LoginButtons">
                         <Link to="/login">
                             <button>Login</button>
                         </Link>
                     </div>

                 </ul>


              </div>
          </div>
        </div>
    )
}
export default NavBar