import './navBar.css'
import {Link} from "react-router-dom";
import React, { useState } from "react";


const NavBar = () =>{
    const [isOpen,setIsOpen] = useState(false)
    const handleClick=()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div class="nav-main-container">
            <div className="inner-container" >
                <h4>TimeKeper</h4>
                <div className="menu" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="navBarFields">
                    <ul className={isOpen ? "open" : ""}>
                        <li className="active"><a href="#">Home</a></li>
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
                <div id="mobile">
                    <i className="fasfa-bars">
                    </i>
                </div>
                <div id="mobile">
                    <i className="fasfa-times">
                    </i>
                </div>

            </div>
        </div>

    )
}
export default NavBar