const App = () => {
  const random = Math.random();
  const getal1 = 7
  const getal2 = 5
  return (
    <>
      <h1>Labo 1</h1>
      <p>{random}</p>
      <p>{getal1}</p>
      <p>{getal2}</p>
      <p>{getal1 + getal2}</p>
    </>
  );
}

export default App;