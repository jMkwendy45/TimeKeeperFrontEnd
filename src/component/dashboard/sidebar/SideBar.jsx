 import { FaUser } from 'react-icons/fa';
 import { FaBars ,FaHome} from 'react-icons/fa';

 import { Link } from "react-router-dom";
import './sideBar.css'
const SideBar=()=>{
    return(
        <div className="sid-main">
         <div className="profile-pic-icon-cont">
             <div className="fa-bars">
                 <FaBars/>
             </div>
             <div className="fausr-container">
             </div>
             <div className="fa-user">
                 <FaUser/>
             </div>
             <div className="name-div">
                 <h4>Hi! Oluchi</h4>
             </div>
         </div>

            <div className="sidbar-info">
                <div className="workdsh">
                    <div>
                        <FaHome/>
                    </div>
                     <div>
                    <Link to="/workersdash" style={{ textDecoration: 'none' ,color:'white'}}>Home</Link>
                     </div>
                </div>
            </div>



        </div>
    )
}
export default SideBar