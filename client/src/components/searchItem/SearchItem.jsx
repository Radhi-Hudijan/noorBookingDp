import React from "react";
import { Link } from "react-router-dom";
import style from "./SearchItem.module.css";

const SearchItem = ({ item }) => {
  return (
    <div className={style.searchItem}>
      <img src={item.photos} alt="" className={style.siImg} />
      <div className={style.siDesc}>
        <h1 className={style.siTitle}> {item.name}</h1>
        <span className={style.siDistance}>{item.distance} from center</span>
        <span className={style.siTaxiOp}>Free Airport taxi</span>
        <span className={style.siSubtitle}>
          Studio Apartment with Air conditioning
        </span>
        <span className={style.siFeatures}>{item.desc}</span>
        <span className={style.siCancelOp}>FREE cancellation</span>
        <span className={style.siCancelationSubtitle}>
          You can cancel later, so lock in this grate price today!
        </span>
      </div>

      <div className={style.siDetails}>
        {item.rating && (
          <div className={style.siRating}>
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}

        <div className={style.siDetailTexts}>
          <span className={style.siPrice}>${item.cheapestPrice}</span>
          <span className={style.siTaxOp}>Includes taxes and charges</span>
          <Link to={`/hotels/${item._id}`}>
            <button className={style.siCheckButton}>See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
