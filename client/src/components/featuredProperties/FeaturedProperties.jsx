import React from "react";
import useFetch from "../../hooks/useFetch";
import style from "./FeaturedProperties.module.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels?featured=true&&limit=4"
  );

  return (
    <div className={style.fp}>
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => {
            return (
              <div className={style.fpItem} key={item._id}>
                <img src={item.photos[0]} alt="" className={style.fpImg} />
                <span className={style.fpName}> {item.name}</span>
                <span className={style.fpCity}> {item.city}</span>
                <span className={style.fpPrice}>
                  Starting from {item.cheapestPrice}$
                </span>

                {item.rating && (
                  <div className={style.fpRating}>
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
