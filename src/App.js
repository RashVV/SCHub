import React from 'react';
import './App.css';
import Header from './Header/Heder.jsx'
import './Header/header.module.css'
import Album from './Album';

function App() {
  return (
    <div className="App">
      <Header />
      <Album />    
     </div>
  );
}

export default App;
