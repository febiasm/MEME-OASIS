import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import AboutMePage from "./AboutMePage";
import Landingpg from "./Landingpg";
import SignUpPage from "./SignUpPage"
import Home from "./Home";
import LoginPage from "./LoginPage";
import Mymemes from "./Mymemes";
import Explore from "./Explore";
import Loading from "./Loading";
import LogoutLoad from "./LogoutLoad";
import Help from "./Help";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpg />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<AboutMePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/Mymemes" element={<Mymemes />} />
          <Route path="/LogoutLoad" element={<LogoutLoad />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
