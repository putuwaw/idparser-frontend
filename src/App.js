import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Parser from './components/parser';
import Navbar from './components/navbar';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/parser' element={< Parser />}></Route>
          </Routes>
          <Footer></Footer>
      </Router>
    );
  }
}

export default App;