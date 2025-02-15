import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Details = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCrypto(data))
      .catch((err) => console.error(err));

    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=320`
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.prices.map((price) => ({
          date: new Date(price[0]).toLocaleDateString(),
          price: price[1],  
        }));    
        setChartData(formattedData);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!crypto) return <p className="text-white text-center mt-4">Loading...</p>;

  return (
    <div className="p-6 text-black flex bg-[#1d1f28]">
      <div className="w-[557px] border-r border-white p-[20px]">
        <div className="flex items-center flex-col">
          <img
            src={crypto.image.large}
            alt={crypto.name}
            className="w-24 my-4"
          />
          <h2 className="text-[40px] font-bold text-white">
            {crypto.name} ({crypto.symbol.toUpperCase()})
          </h2>
        </div>
        <div className="flex flex-col items-start gap-[20px] mt-[30px] text-white">
           <p
          className=""
          dangerouslySetInnerHTML={{
            __html: crypto.description.en.split(". ")[0] + ".",
          }}
        ></p>
        <p>Rank: <span>{crypto.market_cap_rank}</span></p>
        <p>
          Current Price: <span className="text-gray-500">${crypto.market_data.current_price.usd}</span>
        </p>
        <p>Market Cap: <span className="text-gray-500">${crypto.market_data.market_cap.usd}</span></p>
        <p>24h Change: <span className="text-gray-500">{crypto.market_data.price_change_percentage_24h}%</span></p>
        </div>
      </div>
      <div className="w-[86%] p-[20px]">
        <h3 className="text-xl font-semibold mb-3 text-white">Price Chart (320days)</h3>
        <ResponsiveContainer width="90%" height={550}>
          <LineChart data={chartData}>
            <XAxis dataKey="date" tick={{ fill: "white" }} />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#87CEEB"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Details;
