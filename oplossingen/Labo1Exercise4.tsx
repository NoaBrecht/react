import React, { useState } from 'react';
import slotCherry from './assets/slot-cherry.png';
import slotLemon from './assets/slot-lemon.png';
import slotMelon from './assets/slot-melon.png';
import slotPrune from './assets/slot-prune.png';
import slotSeven from './assets/slot-seven.png';

export const Slot = ({ value }: { value: number }) => {
  return (
    <>
      {value == 0 && <img src={slotCherry} height="64" width="64" />}
      {value == 1 && <img src={slotLemon} height="64" width="64" />}
      {value == 2 && <img src={slotMelon} height="64" width="64" />}
      {value == 3 && <img src={slotPrune} height="64" width="64" />}
      {value == 4 && <img src={slotSeven} height="64" width="64" />}
    </>
  );
};

export const SlotMachine = ({ slots }: { slots: number }) => {
  let slotNumbers: number[] = Array.from(Array(slots).keys()).map(() =>
    Math.floor(Math.random() * 5)
  );
  let winning = slotNumbers.find((slot) => slot !== slots[0]) == undefined;

  return (
    <>
      {winning ? <p>Je hebt gewonnen</p> : <p>Je hebt verloren</p>}

      {slotNumbers.map((slot, i) => (
        <Slot value={slot} key={i} />
      ))}
    </>
  );
};

const App = () => {
  const [refresh, setRefresh] = useState(0);

  return (
    <>
      <h1>Labo 1: Slots met map</h1>
      <Slot value={0} />
      <Slot value={1} />
      <Slot value={2} />
      <Slot value={3} />
      <Slot value={4} />
      <br />
      <SlotMachine slots={5} />
      <br />
      <button
        onClick={() => {
          setRefresh(Math.random());
        }}
      >
        Refresh
      </button>
    </>
  );
};

export default App;
