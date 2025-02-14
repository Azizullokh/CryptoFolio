import React from "react";

function Card(props) {
  const { crypto } = props;
  console.log(crypto);
  
  return (
    <div className="w-[20%] text-center text-white flex items-center flex-col">
      <img className="w-[50px]" src={crypto?.image} alt="crypto icon" />
      <h3>
        <span>
            {crypto?.symbol}
        </span>
        <span>{crypto?.price_change_percentage_24h.toFixed(2)}%</span>
      </h3>
      <h2><span>₹</span><span>{crypto?.total_volume}</span></h2>
    </div>
  );
}

export default Card;
