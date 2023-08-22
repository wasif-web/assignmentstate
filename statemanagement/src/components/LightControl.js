import React from 'react';

function LightControl({ handleLightToggle }) {
  return (
    <div className="light-control">
      <button onClick={handleLightToggle}>ON</button>
      <button onClick={handleLightToggle}>OFF</button>
    </div>
  );
}

export default LightControl;
