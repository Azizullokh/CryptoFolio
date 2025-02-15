import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("usd");
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h`
      );
      setCoins(data);
    };
    fetchCoins();
  }, [currency, page]); 

  return (
    <CryptoContext.Provider value={{ currency, setCurrency, coins, page, setPage, watchlist, setWatchlist }}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCrypto = () => useContext(CryptoContext);




