import { useEffect, useState } from "react";
import Light from "./Light";
interface TimerProps {
  interval: number
}
const Timer = ({ interval }: TimerProps) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let handle = setInterval(() => {
      setNumber(number => number + 1);
    }, interval);

    return () => {
      clearInterval(handle);
    }
  }, [interval]);
  // return <p>{number}</p>
}
const Opdracht3 = () => {
  const [currentColor, setCurrentColor] = useState("red")
  const [selectedSpeed, setselectedSpeed] = useState("6000");
  return (<>
    <h1>Opdracht 3</h1>
    <div style={{ backgroundColor: "black", width: 200, borderRadius: 20 }}>
      <Light color="red" on={true} />
      <Light color="orange" on={false} />
      <Light color="green" on={false} />
    </div>
    speed:
    <select name="speed" id="speed" onChange={(event) => setselectedSpeed(event.target.value)} value={selectedSpeed}>
      <option value="6000">x1</option>
      <option value="3000">x2</option>
      <option value="1500">x4</option>
    </select>
    {/* <Timer interval={parseInt(selectedSpeed)} /> */}
  </>
  )
};

export default Opdracht3;