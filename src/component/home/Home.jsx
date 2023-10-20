import './home.css'
import NavBar from '../../component/navBar/NavBar'
import lottie from 'lottie-web';
import React, { useEffect, useRef,useState } from 'react';
// import { Link } from "react-router-dom";
import MessageIcon from './Icon Boxs.png'
import TeamIcon from './Icon Box.png'
import ReloadIcon from'./reload.png'
import SearchIcon from './searchic.png'
import timePlay from './time.json'
import subscribePict from './Pills.png'

const Home = ()=>{
    const container = useRef(null);
    let anim = null; // Declare a variable to hold the Lottie animation instance

    useEffect(() => {
        anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: timePlay,
        });
        return () => {
            anim.destroy();
        };
    }, []);


    const loginData = {
        emailAddress: "",
    }
    const [data, setData] = useState(loginData);
    const collectLoginData = async (event) => {
        event.preventDefault();

        setData((state) => ({
            ...state,
            [event.target.name]: event.target.value,
        }));

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const JoinToPartnerData = {
            emailAddress: data.emailAddress,
        }
        console.log(JoinToPartnerData)
    }


    return(
        <div className="home-container">
            <NavBar/>
       <div className="text-container">


           <div className="st-cont">

               <div className="streamText">
                   <h1> Streamline Your Workflow With Time Keeper</h1>
               </div>

               <div className="effort-text">
                   <p>Effortlessly manage tasks ,teams and projects
                       with our intuitive managementl,o app
                       Simplify your work Simplify your productivity
                   </p>
               </div>

           </div>
           <div  className="container" style={{ height: '300px', width: '500px'}} ref={container} ></div>
       </div>
      <div className="joinandwatchButton">
          <div className="joinButton">
              <button>Join Now</button>
          </div>
          <div className="watchButton">
              <button>Watch Video</button>
          </div>
      </div>
            <div className="second_text_container">
                <div className="key_text">
                    <h4>Key Features</h4>
                </div>
                <div className="embrace_text">
                    <p>Embrace life's vastness, venture forth, and discover the wonders waiting beyond.
                        The world beckons; seize its grand offerings now!</p>
                </div>
            </div>
            <div className="key-feature-imgs">
                <div className="task-mang">
                    <img src={MessageIcon} alt="React Image" />
                    <h6>Time Managment</h6>
                    <p>Organise and track perfromsnce with ease</p>
                </div>

                <div className="team-collab">
                    <img src={TeamIcon} alt="React Image" />
                    <h6>Team Collaboration</h6>
                    <p>Efficitenly Collaborate and communicate with team</p>
                </div>

                <div className="project-trkin">
                    <img src={ReloadIcon} alt="React Image" />
                    <h6>Project Tracking</h6>
                    <p>Monitor Time progress and milestones</p>
                </div>

                <div className="report">
                    <img src={SearchIcon} alt="React Image" />
                    <h6>Report and Tracking</h6>
                    <p>Access insighthful data for informed deceision</p>
                </div>
            </div>
            <div>
                <div className="subscribe-box">
                    <div >
                        <img src={subscribePict} alt="React Image" />
                       <h3>Subscribe to Our News Letter to Get Company News</h3>
                    </div>
                   <div className="sub-button">
                       <input type="email" name="emailAddress" placeholder="EmailAddress" onChange={collectLoginData} />
                       <button className="submitBtn" onClick={handleSubmit}>Subscribe</button>
                   </div>
                </div>

            </div>
        </div>
    )
}
export default Home

{/*<div className="container" style={{ height: '300px', width: '300px' }}>*/}
{/*    <div  className="container" style={{ height: '300px', width: '300px' }}ref={container} ></div>*/}
{/*</div>*/}