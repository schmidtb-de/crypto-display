import React, { useEffect, useState } from "react";
import { Profit } from "./Profit";
import { CurrencyLogo } from "./CurrencyLogo";

function CryptoData(props) {
  const [worth, setWorth] = useState(10);
  const { currency, invested, amount } = props.coins;

  /* KEYS:
    CF8FB01A-5AD9-47C4-80F4-47E770FFB7C4
    4565A4C3-E11E-4F68-8DB4-93577C246DF2
    8AD620D8-61CE-4EFA-866D-071211C7ED9B
    */
  useEffect(() => {
    fetch(
      `https://rest.coinapi.io/v1/exchangerate/${currency}/EUR?apikey=4565A4C3-E11E-4F68-8DB4-93577C246DF2`
    )
      .then(res => res.json())
      .then(data => {
        setWorth(data.rate);
      });
  }, [currency]);

  function exchange() {
    return Math.round(worth * amount);
  }

  useEffect(() => {
    const property =
      Number(document.getElementsByClassName("cryptoSum")[0].innerText) +
      Number(document.getElementsByClassName("cryptoSum")[1].innerText) +
      Number(document.getElementsByClassName("cryptoSum")[2].innerText);
    props.setProperty(property);
  });

  return (
    <div
      style={
        Profit(exchange(), invested) ? { color: "green" } : { color: "red" }
      }
    >
      <figure>
        <img src={CurrencyLogo(currency)} alt={invested} height="100" />
      </figure>
      <figcaption>
        <span className="cryptoSum">{exchange()}</span>€
      </figcaption>
    </div>
  );
}

export default CryptoData;
