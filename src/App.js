import logo from './logo.svg';
import './App.css';
import NavBar from "./component/navBar/NavBar";
import Home from "./component/home/Home";
import SignUp from './component/signup/Signup'
import Login from './component/login/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkersDashboard from "./component/dashboard/WorkersDashboard";
import SideBar from "./component/dashboard/sidebar/SideBar";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="" Component={Home} />
            <Route path="/nav" Component={NavBar}/>
            <Route path="/sign_up" Component={SignUp}/>
            <Route path="/login" Component={Login}/>
        </Routes>

          <Routes>
              <Route exact path="/workersdash" Component={WorkersDashboard} />
              <Route path="/sidebar" Component={SideBar}/>
              {/*<Route path="/sign_up" Component={SignUp}/>*/}
              {/*<Route path="/login" Component={Login}/>*/}
          </Routes>
      </BrowserRouter>
  );
}

export default App;
