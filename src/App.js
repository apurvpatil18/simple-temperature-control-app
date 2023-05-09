import React, {useState} from 'react';


const App = () =>  {
  const [temperatureValue, setTemperatureValue] = useState(20);
  const [temperatureColor, setTemperatureColor]= useState("cold");

  const increseTemperature = () => {
    if (temperatureValue === 35)  return ;
    const newTemperature = temperatureValue + 1;

    if(newTemperature >= 20) {
      setTemperatureColor('hot');
    } 
    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    if (temperatureValue === -1) return ;
    const newTemperature = temperatureValue - 1;

    if(newTemperature <= 20) {
      setTemperatureColor('cold');
    } 
    setTemperatureValue(newTemperature);
  };

  return (
    <div className="app-container"> <h1> Temperature Control App</h1>
     <div className="temperature-display-container">
     <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
     <div className="button-container">
      <button onClick={() => increseTemperature ()}>+</button>
      <button onClick={() => decreaseTemperature()}>-</button>
     </div>
     </div>
    </div>  
  )
}


export default App;