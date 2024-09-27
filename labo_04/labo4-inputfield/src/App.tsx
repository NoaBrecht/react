import { useState } from "react";



const InputFields = () => {
  const [Value, setValue] = useState<string>("");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  }
  return (
    <>
      <input type="text" name="" id="" value={Value} onChange={handleChange} />
      <input type="text" name="" id="" value={Value} onChange={handleChange} />
      <input type="text" name="" id="" value={Value} onChange={handleChange} />
      <input type="text" name="" id="" value={Value} onChange={handleChange} />
      <input type="text" name="" id="" value={Value} onChange={handleChange} />
    </>);
}
const App = () => {
  return (
    <>
      <InputFields />
    </>
  );
};

export default App;
