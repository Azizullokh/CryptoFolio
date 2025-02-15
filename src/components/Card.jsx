import React from "react";

function Card(props) {
  const { crypto } = props;

  const formatNumber = (num, sliceCount = 7) => {
    if (!num) return "0";
    const formatted = num.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ",");
    return formatted.slice(0, sliceCount);
  };

  return (
    <div className="w-[20%] text-center text-white flex items-center flex-col">
      <img className="w-[50px]" src={crypto?.image} alt="crypto icon" />
      <h3>
        <span>{crypto?.symbol}</span>
        <span>{crypto?.price_change_percentage_24h.toFixed(2)}%</span>
      </h3>
      <h2>
        <span>₹ </span>
        <span>{formatNumber(crypto?.total_volume, 7)}</span>
      </h2>
    </div>
  );
}

export default Card;
