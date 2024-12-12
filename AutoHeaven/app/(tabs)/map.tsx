import Map from "@/components/map";
import { Brand } from "@/types/types";
import { useState, useEffect } from "react";

const mapPage = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  let getBrands = async () => {
    setLoading(true);
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8",
    };
    let response = await fetch("https://sampleapis.assimilate.be/car/brands", {
      headers,
    });
    let data: Brand[] = await response.json();
    setBrands(data);
    setLoading(false);
  };
  useEffect(() => {
    getBrands();
  }, []);
  return <>{!loading && <Map brands={brands} />}</>;
};
export default mapPage;
