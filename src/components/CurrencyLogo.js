import BitcoinLogo from "../img/bitcoin.svg";
import EtherumLogo from "../img/ethereum.svg";
import LitecoinLogo from "../img/litecoin.svg";

export function CurrencyLogo(currency) {
  if (currency === "BTC") {
    return BitcoinLogo;
  } else if (currency === "ETH") {
    return EtherumLogo;
  }
  return LitecoinLogo;
}
