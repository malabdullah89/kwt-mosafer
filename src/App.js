import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from './compenets/NavBar'
import ImgSlider from './compenets/ImgSlider'
import AttentionSection from './compenets/AttentionSection'
import Singin from './compenets/Signin'

function App() {
  return (
    <div className="App">
        <NavBar />
        <ImgSlider />
        <AttentionSection />
        <Singin />
    </div>
  );
}

export default App;
