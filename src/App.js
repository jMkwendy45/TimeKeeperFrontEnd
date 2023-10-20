import logo from './logo.svg';
import './App.css';
import NavBar from "./component/navBar/NavBar";
import Home from "./component/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/nav" Component={NavBar}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
