import React from "react";
import { Nav } from "./components/nav/Nav";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Restaurants } from "./pages/Restaurants/Restuarants";
import { Contact } from "./pages/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.module.scss";
import { Header } from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header>
        <Nav />
      </Header>
      <Routes>
        <Route index={'/'} exact path="/" element={<Home/>}>
          <Route exact path="/home" element={<Home/>}/>
        </Route>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/restaurants" element={<Restaurants />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
