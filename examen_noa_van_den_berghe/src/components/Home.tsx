import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome iedereen</h1>
      <p>Kies welke oefening je wilt zien</p>
      <ul>
        <li><Link to="/opdracht-1">Oefening 1</Link></li>
        <li><Link to="/opdracht-2">Oefening 2</Link></li>
        <li><Link to="/opdracht-3">Oefening 3</Link></li>
      </ul>
    </>
  )
};

export default Home;