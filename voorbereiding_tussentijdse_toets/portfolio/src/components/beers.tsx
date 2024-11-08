import React, { useContext, useEffect, useState } from "react";
import { getThemeStyle, ThemeContext } from "../Root";
import { Beer } from "../types";



const Oefening1 = () => {
  const { theme } = useContext(ThemeContext);

  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const fetchFunction = async () => {
      let result = await fetch("https://raw.githubusercontent.com/slimmii/mock_api/main/beers/beers.json");
      let json: Beer[] = await result.json();

      setBeers(json);
    }
    fetchFunction();
  }, []);

  const [borderId, setBorderId] = useState<number>(0)

  return (
    <div style={getThemeStyle(theme)}>

      <h1>{borderId!==0 && beers[borderId-1].description}</h1>


      <div className="grid-container">
        <h1></h1>
        {beers.map((beer) => (
          <div onClick={() => setBorderId(beer.id)} key={beer.id}>
            <img style={{ width: 100, height: "auto", border: borderId == beer.id ? "solid red" : "" }} src={beer.logo} alt={beer.name} />
            <p>{beer.name}</p>
          </div>
        ))}
      </div>
    </div>
  )

};

export default Oefening1;