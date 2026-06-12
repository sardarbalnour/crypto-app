import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market-cap-desc&per_page=20&page=1&x_cg_demo_api_key=CG-hk4aK834L9KCSmcwfMiWdF7H"
    )
      .then((res) => res.json())
      .then((json) => setCoins(json))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
