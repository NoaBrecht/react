import React, { useEffect, useState } from "react";
import { PlatformDictionary, SteamGame } from "../types";

const Opdracht2 = () => {
  const [games, setGames] = useState<SteamGame[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterPlatform, setFilterPlatform] = useState("Windows")

  async function loadGames() {
    setLoading(true);
    let response = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/steam.json");
    let gameResponse: SteamGame[] = await response.json();
    setGames([...gameResponse])
    setLoading(false);
  };

  let filtreredGames = games.filter((game) => game.name.toLowerCase().includes(filterName.toLowerCase()))
  if (filterPlatform === "Linux") {
    filtreredGames = filtreredGames.filter((game) => game.platforms.linux === true)
  }
  else if (filterPlatform === "Mac") {
    filtreredGames = filtreredGames.filter((game) => game.platforms.mac === true)

  }
  else {
    filtreredGames = filtreredGames.filter((game) => game.platforms.windows === true)

  }
  useEffect(() => {
    loadGames();
  }, []);
  let defaultChecked: string;
  if (filterPlatform === "Windows") { defaultChecked = "checked" }
  return (
    <div>
      <h1>Opdracht 2</h1>
      {loading && <p>Loading...</p>}
      {!loading && <p>Er blijven {filtreredGames.length} games over</p>}
      {!loading && <input type="text" name="FilterName" onChange={(event) => setFilterName(event.target.value)} />}
      {!loading && <>
        <input type="radio" defaultChecked name="Platform" onChange={(event) => setFilterPlatform("Windows")} />Windows
        <input type="radio" name="Platform" onChange={(event) => setFilterPlatform("Mac")} />Mac
        <input type="radio" name="Platform" onChange={(event) => setFilterPlatform("Linux")} />Linux
      </>}
      <div>

        {filtreredGames.map((game) => (
          <img src={game.image}></img>
        ))}
      </div>
    </div>
  )
};

export default Opdracht2;