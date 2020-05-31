import React, { useState } from "react";
import Slider from "react-rangeslider";
import { IColor, COLOR } from "./@types/IColor";

import "./App.css";
import "react-rangeslider/lib/index.css";
import Bar from "./components/Bar";

const App = () => {
  const [color, setColor] = useState<IColor>({ Red: 0, Green: 0, Blue: 0 });
  const handleColor = (value: number, key: string) =>
    setColor({ ...color, [key]: value });
  const setRed = (value: number) => handleColor(value, COLOR.Red);
  const setGreen = (value: number) => handleColor(value, COLOR.Green);
  const setBlue = (value: number) => handleColor(value, COLOR.Blue);
  return (
    <div className="App">
      <div className="slider orientation-reversed">
        <div>{color.Red}</div>
        <Slider value={color.Red} min={0} max={255} onChange={setRed} />
      </div>
      <div>
        <div>{color.Green}</div>
        <Slider value={color.Green} min={0} max={255} onChange={setGreen} />
      </div>
      <div>
        <div>{color.Blue}</div>
        <Slider value={color.Blue} min={0} max={255} onChange={setBlue} />
      </div>
      <Bar rgb={color} />
    </div>
  );
};

export default App;
