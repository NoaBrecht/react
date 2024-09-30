import { useState } from "react";

interface ShoppingItem {
  name: string;
  quantity: number;
}

const ShoppingList = () => {
  const [name, setName] = useState<string>('');
  const [quantity, setquantity] = useState<number>(0);
  const [ShoppingList, setShoppingList] = useState<ShoppingItem[]>([]);

  const addShoppingItem = () => {
    setShoppingList([...ShoppingList, { name: name, quantity: quantity }]);
  }
  return (
    <>
      <label htmlFor="name">Name: </label>
      <input value={name} onChange={(event) => { setName(event.target.value) }} type="text" name="name" id="name" placeholder="Name" />
      <label htmlFor="quantity">Quantity: </label>
      <input value={quantity} onChange={(event) => { setquantity(parseInt(event.target.value)) }} type="number" name="quantity" id="quantity" defaultValue={0} />

      <button onClick={addShoppingItem}>add</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ShoppingList.map((item, index) => <tr key={index}><td>{item.name}</td><td>{item.quantity}</td></tr>)}
        </tbody>
      </table>
    </>
  );
}

const App = () => {
  return (
    <div>
      <ShoppingList />
    </div>
  );
}
export default App;