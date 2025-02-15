import React, { useEffect, useState } from "react";
import { https } from "../axios";
import eye from "../images/Eye.png";
import Pagination from "../components/Plagination";
import { Link } from "react-router-dom";
import { useCrypto } from "../context/CryptoContext";

function HomeMain() {
  const [newCryptos, setNewCryptos] = useState([]);
  const { coins, page, setPage } = useCrypto();

  //   useEffect(() => {
  //     https
  //       .get(
  //         `/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  //       )
  //       .then((response) => {
  //         setNewCryptos(response.data);
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [page]);

  return (
    <div className="bg-[#14161a]">
      <div className="w-[60%] mx-auto flex flex-col items-center">
        <h2 className="text-[34px] text-white text-center py-[18px]">
          Cryptocurrency Prices by Market Cap
        </h2>
        <input
          className="border-[1px] p-[15px] w-full border-gray-400 rounded outline-none placeholder:text-white text-white"
          type="search"
          placeholder="Search For a Crypto Currency.."
        />
        <div className="flex w-[100%] bg-[#87CEEB] items-center justify-between py-[15px] rounded mt-[20px] px-[16px]">
          <div>
            <h3 className="text-[14px] font-bold text-black">Coin</h3>
          </div>
          <div className="flex gap-[180px]">
            <h3 className="text-[14px] font-bold text-black">Price</h3>
            <h3 className="text-[14px] font-bold text-black">24h Change</h3>
            <h3 className="text-[14px] font-bold text-black">Market Cap</h3>
          </div>
        </div>
        <div className="bg-[#171716] w-[100%] flex items-start flex-col">
          {coins.length > 0 &&
            coins.map((newcrypto) => {
              return (
                <div
                  key={newcrypto.id}
                  className="flex w-[50%] items-center justify-between  border-b p-[20px] border-gray-500 w-[100%]"
                >
                  <div className="flex gap-[10px]">
                    <img className="w-[50px]" src={newcrypto.image} alt="" />
                    <div className="flex flex-col items-start">
                      <h2 className="text-[22px] text-white uppercase">
                        {newcrypto.name}
                      </h2>
                      <h3 className="text-[#A9A9A9] text-[14px] uppercase">
                        {newcrypto.symbol}
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-[130px]">
                    <h2 className="text-white">
                      ${newcrypto.current_price.toLocaleString()}
                    </h2>
                    <div className="flex items-center gap-[10px]">
                      <button className="cursor-pointer">
                        <Link
                          className="flex w-[100%]"
                          to={`/details/${newcrypto.id}`}
                          key={newcrypto.id}
                        >
                          <img className="w-[25px]" src={eye} alt="" />
                        </Link>
                      </button>
                      <h2
                        className={
                          newcrypto.price_change_percentage_24h > 0
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {newcrypto.price_change_percentage_24h.toFixed(2)} %
                      </h2>
                    </div>

                    <h2 className="text-white">
                      ${newcrypto.market_cap.toLocaleString()} M
                    </h2>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex items-center w-[100%] mx-auto p-[20px]">
          <Pagination page={page} setPages={setPage}></Pagination>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
