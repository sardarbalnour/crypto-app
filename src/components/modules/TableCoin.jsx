import { LineWave } from "react-loader-spinner";

import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import styles from "./TableCoin.module.css";

function TableCoin({ coins, isLoading, currency, setChart }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <LineWave
          height="300"
          width="300"
          firstLineColor="green"
          middleLineColor="red"
          lastLineColor="green"
        />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                key={coin.id}
                coin={coin}
                currency={currency}
                setChart={setChart}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({
  coin: {
    name,
    id,
    symbol,
    image,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  },
  currency,
  setChart,
}) => {
  const symbols = {
    usd: "$",
    eur: "€",
    jpy: "¥",
  };

  const showHandler = () => {
    setChart(true)
  };

  return (
    <tr key={id}>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {symbols[currency]}
        {current_price != null ? current_price.toLocaleString() : "0"}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change != null ? price_change.toFixed(2) : "0.00"}%
      </td>
      <td>{total_volume != null ? total_volume.toLocaleString() : "0"}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt="" />
      </td>
    </tr>
  );
};
