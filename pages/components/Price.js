import { useSelector } from "react-redux";
import { getPrice } from "../../store/store";
import styles from "../../styles/Price.module.scss";

export const Price = () => {
  const price = useSelector(getPrice);
  console.log(price);
  const { bpi } = price;

  const bpiArr = Object.values(bpi);

  console.log(bpiArr);
  return (
    <div className={styles.block}>
      <p>
        <span className="tag is-primary is-light">Data updated:</span>
        {price && price.time.updated}
      </p>
      <p className={styles.block__title}>
        <span className="tag is-primary is-light">Name:</span>
        {price && price.chartName}
      </p>

      {bpiArr.map((item) => {
        return (
          <div key={item.rate} className={styles.block}>
            <h2 className="tag is-primary is-light is-large">
              {price && item.code}
            </h2>
            <p>
              <span className="tag is-primary is-light">rate: </span>
              {price && item.rate}
              <span>
                {(item.symbol === "&euro;" && "€") ||
                  (item.symbol === "&pound;" && "£") ||
                  (item.symbol === "&#36;" && "$")}
              </span>
            </p>
          </div>
        );
      })}

      <p>
        <span className="tag is-primary is-light">Description:</span>
        {price && price.disclaimer}
      </p>
    </div>
  );
};
