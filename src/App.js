import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Header from './components/Header';
import './App.css';
import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />      
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
