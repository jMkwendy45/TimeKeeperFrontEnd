import './navBar.css'
const NavBar = () =>{

    return(
        <div class="nav-main-container">
          <div className="inner-container" >
              <h4>TimeKeper</h4>
              <div className="navBarFields">
                 <ul>
                   <li><a href="#">Home</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Contact Us</a></li>
                     <li><a href="#">Blog</a></li>
                     <div className="buttons">
                         <button>Sign up</button>
                     </div>
                     <div className="LoginButtons">
                         <button>Login</button>
                     </div>
                 </ul>


              </div>
          </div>
        </div>
    )
}
export default NavBar