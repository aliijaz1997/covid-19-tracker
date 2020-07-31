import React from 'react';
import './App.css';
import Header from './appbar';
import MainGrid from './maingrid';
import MyChart from './chart';

function App() {
  return (
    <div>
       <Header/>
     <MainGrid/>
     <MyChart/>
    </div>
  );
}

export default App;
