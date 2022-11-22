import logo from './logo.svg';
import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '.components/pages/About';
export default App;

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PortfolioContainer />
    </div>
  );
  <div>
  <Router>
          <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={<SearchBooks/>} 
            />
            <Route 
              path="/saved" 
              element={<SavedBooks/>} 
            />
            <Route 
              path='*' 
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
      </Router>
</div>

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'build', "index.html",
},


app.listen(9000);