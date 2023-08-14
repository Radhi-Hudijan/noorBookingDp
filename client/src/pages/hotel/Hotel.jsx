import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import NavBar from "../../components/navbar/NavBar";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import Reserve from "../../components/reserve/Reserve";
import style from "./Hotel.module.css";

const Hotel = () => {
  const location = useLocation();

  // get the id from the hotel path
  const id = location.pathname.split("/")[2];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/api/hotels/find/${id}`);

  const { dates, options } = useContext(SearchContext);

  // import user details
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  //count the day difference
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);

    return diffDays;
  };
  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleArrow = (direction) => {
    if (direction === "l") {
      setSlideNumber(slideNumber === 0 ? 5 : slideNumber - 1);
    } else {
      setSlideNumber(slideNumber === 5 ? 0 : slideNumber + 1);
    }
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <NavBar />
      <Header type="list" />

      {loading ? (
        "Loading"
      ) : (
        <div className={style.hotelContainer}>
          {open && (
            <div className={style.slider}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={style.close}
                onClick={() => {
                  setOpen(false);
                }}
              />
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className={style.arrow}
                onClick={() => {
                  handleArrow("l");
                }}
              />
              <div className={style.sliderWrapper}>
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className={style.sliderImg}
                />
              </div>
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className={style.arrow}
                onClick={() => {
                  handleArrow("r");
                }}
              />
            </div>
          )}
          <div className={style.hotelWrapper}>
            <button className={style.bookNowButton} onClick={handleClick}>
              Reserve or Book Now!
            </button>
            <h1 className={style.hotelTitle}>{data.name}</h1>
            <div className={style.hotelAddress}>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address} </span>
            </div>
            <span className={style.hotelDistance}>
              Excellent location - {data.distance} from center
            </span>
            <span className={style.hotelPriceHighlight}>
              Book a stay over € {data.cheapestPrice} at this property and get a
              free airport taxi
            </span>

            <div className={style.hotelImages}>
              {data.photos?.map((photo, i) => (
                <div className={style.hotelImgWrapper} key={i}>
                  <img
                    src={photo}
                    alt=""
                    className={style.hotelImg}
                    onClick={() => handleOpen(i)}
                  />
                </div>
              ))}
            </div>

            <div className={style.hotelDetails}>
              <div className={style.hotelDetailsTexts}>
                <h1 className={style.hotelTitle}>{data.title}</h1>
                <p className={style.hotelDesc}>{data.desc}</p>
              </div>
              <div className={style.hotelDetailsPrice}>
                <h1>Perfect for a {days}-night stay!</h1>
                <span>Top location: Highly rated by recent guests (8.6)</span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
