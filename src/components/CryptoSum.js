import React from "react";
import { Profit } from "./Profit";
import { Coins } from "./Coins";

function CryptoSum(props) {
  const invested =
    Coins.bitcoin.invested + Coins.etherum.invested + Coins.litecoin.invested;

  return (
    <header className="App-header">
      <h1
        style={
          Profit(props.property, invested)
            ? { color: "lightGreen" }
            : { color: "red" }
        }
      >
        {props.property - invested} €
      </h1>
    </header>
  );
}

export default CryptoSum;
