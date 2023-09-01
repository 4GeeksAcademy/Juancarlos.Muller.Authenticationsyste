//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./store/UserContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Registro from "./component/Registro";
import Login from "./component/Login";
//render your react application
ReactDOM.render(
  <UserProvider>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  </UserProvider>,
  document.querySelector('#app')
);
