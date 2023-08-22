import React, { useState } from 'react';
import LightControl from './components/LightControl';
import './App.css';

function App() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [roomTemperature, setRoomTemperature] = useState(72);

  const handleLightToggle = () => {
    setIsLightOn(prevState => !prevState);
  };

  const increaseTemperature = () => {
    setRoomTemperature(prevTemperature => prevTemperature + 1);
  };

  const decreaseTemperature = () => {
    setRoomTemperature(prevTemperature => prevTemperature - 1);
  };

  return (
    <div className="app">
      <LightControl handleLightToggle={handleLightToggle} />
      {isLightOn ? <p>Light is ON</p> : <p>Light is OFF</p>}
      <p>Current Temperature: {roomTemperature}°</p>
      <button onClick={increaseTemperature}>+</button>
      <button onClick={decreaseTemperature}>-</button>
    </div>
  );
}

export default App;
