import React, { useState } from "react";
import "./App.css";
import CryptoData from "./components/CryptoData";
import { Coins } from "./components/Coins";
import CryptoSum from "./components/CryptoSum";

function App() {
  const [property, setProperty] = useState(0);

  /*   useEffect(() => {
    const property =
      Number(document.getElementsByClassName("cryptoSum")[0].innerText) +
      Number(document.getElementsByClassName("cryptoSum")[1].innerText) +
      Number(document.getElementsByClassName("cryptoSum")[2].innerText);
    setProperty(property);
  }, []); */

  return (
    <div className="App">
      <CryptoSum property={property} />
      <content>
        <CryptoData coins={Coins.bitcoin} setProperty={setProperty} />
        <CryptoData coins={Coins.litecoin} setProperty={setProperty} />
        <CryptoData coins={Coins.etherum} setProperty={setProperty} />
      </content>
    </div>
  );
}

export default App;
