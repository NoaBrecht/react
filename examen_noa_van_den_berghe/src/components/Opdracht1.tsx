import React, { useState } from "react";

const Opdracht1 = () => {
  const [celcius, setCelcius] = useState(0);
  const [celciusField, setCelciusField] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [fahrenheitField, setFahrenheitField] = useState(0);

  const celciusToFarenheit = () => {
    setFahrenheit((celcius * 9 / 5) + 32)
    setFahrenheitField(fahrenheit)
  }
  const FarenheitToCelcius = () => {
    setCelcius((fahrenheit - 32) * 5 / 9)
    setCelciusField(celcius)
  }

  return (
    <>
      <h1>Opdracht 1</h1>
      <p>Celcius</p>
      <input type="number" onChange={(e) => setCelcius(parseInt(e.target.value))} value={celcius} />
      <button onClick={() => { celciusToFarenheit(); }}>From celcius to fahrenheit</button>
      <button onClick={() => { FarenheitToCelcius(); }}>From fahrenheit to celcius</button>
      <input type="number" onChange={(e) => setFahrenheit(parseInt(e.target.value))} value={fahrenheit} />
      <p>Fahrenheit</p>
    </>
  )
};

export default Opdracht1;