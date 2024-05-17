import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// Main CSS
import './App.css';

// Pages
import Home from './Pages/Home/home'
import Bio from './Pages/Bio/bio'
import Music from './Pages/Music/music'
import Dates from './Pages/Dates/dates'
import Shop from './Pages/Shop/shop'

// Functions 
function home() {
  return <Home />
}

function bio() {
  return <Bio />
}

function music() {
  return <Music />
}

function dates() {
  return <Dates />
}

function shop() {
  return <Shop />
}

// Main Function
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ home() } />
          <Route path='/bio' element={ bio() } />
          <Route path='/music' element={ music() } />
          <Route path='/dates' element={ dates() } />
          <Route path='/shop' element={ shop() } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
