import './home.css'
import NavBar from '../../component/navBar/NavBar'
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
// import { Link } from "react-router-dom";
const Home = ()=>{

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            // loop: true,
            autoplay: true,
            animationData: require('./time.json')
        })
    }, [])

    return(
        <div className="home-container">
            <NavBar/>
            {/*<Link to="nav" className="iom"/>*/}
       <div className="text-container">
           <div className="streamText">
               <h1> Streamline Your Workflow With Time Keeper</h1>
           </div>
           <div className="effort-text">
               <p>Effortlessly manage tasks ,teams and projects
                   with our intuitive management app
                   Simplify your work Simplify your productivity
               </p>
           </div>
           {/*<div className="container" ref={container} style={{ height: '300px', width: '300px' }}></div>*/}
      <div className="joinandwatchButton">
          <div className="joinButton">
              <button>Join Now</button>
          </div>
          <div className="watchButton">
              <button>Watch Video</button>
          </div>
      </div>
       </div>;l;l

            <div className="second_text_container">
                <div className="c">
                    <h4>Key Feattures</h4>
                </div>
                <div className="embrace_text">
                    <p>Embrace life's vastness, venture forth, and discover the wonders waiting beyond.
                        The world beckons; seize its grand offerings now!</p>
                </div>
                {/*#e3e3e6#e3e3e6*/}

            </div>
        </div>
    )
}
export default Home