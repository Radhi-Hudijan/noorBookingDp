import React, { useState, useContext } from "react";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faUmbrellaBeach,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className={style.header}>
      <div
        className={
          type === "list"
            ? `${style.headerContainer} ${style.listMode}`
            : style.headerContainer
        }
      >
        <div className={style.headerList}>
          <div className={`${style.headerListItem} ${style.active}`}>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faUmbrellaBeach} />
            <span>Attractions</span>
          </div>
          <div className={style.headerListItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className={style.headerTitle}>Find your next stay</h1>
            <p className={style.headerDesc}>
              Search low prices on hotels, homes and much more...
            </p>
            {!user && (
              <button className={style.headerButton}>
                {" "}
                Sign in / Register
              </button>
            )}
            <div className={style.headerSearch}>
              <div className={style.headerSearchItem}>
                <FontAwesomeIcon icon={faBed} className={style.headerIcon} />
                <input
                  type="text"
                  placeholder="Where are you going ?"
                  className={style.headerSearchInput}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className={style.headerSearchItem}>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className={style.headerIcon}
                />
                <span
                  className={style.headerSearchText}
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                >
                  {`${format(dates[0].startDate, "dd/MM/yyyy")} - ${format(
                    dates[0].endDate,
                    "dd/MM/yyyy"
                  )} `}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={dates}
                    className={style.date}
                  />
                )}
              </div>
              <div className={style.headerSearchItem}>
                <FontAwesomeIcon icon={faPerson} className={style.headerIcon} />
                <span
                  className={style.headerSearchText}
                  onClick={() => {
                    setOpenOptions(!openOptions);
                  }}
                >
                  {`${options.adult} adult . ${options.children} children  .${options.room} room`}
                </span>
                {openOptions && (
                  <div className={style.options}>
                    <div className={style.optionsItem}>
                      <span className={style.optionText}>Adult</span>
                      <div className={style.optionCounter}>
                        <button
                          disabled={options.adult <= 1}
                          className={style.optionCounterButton}
                          onClick={() => {
                            handleOption("adult", "d");
                          }}
                        >
                          -
                        </button>
                        <span className={style.optionCounterNumber}>
                          {options.adult}
                        </span>
                        <button
                          className={style.optionCounterButton}
                          onClick={() => {
                            handleOption("adult", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={style.optionsItem}>
                      <span className={style.optionText}>Children</span>
                      <div className={style.optionCounter}>
                        <button
                          disabled={options.children <= 0}
                          className={style.optionCounterButton}
                          onClick={() => {
                            handleOption("children", "d");
                          }}
                        >
                          -
                        </button>
                        <span className={style.optionCounterNumber}>
                          {options.children}
                        </span>
                        <button
                          className={style.optionCounterButton}
                          onClick={() => {
                            handleOption("children", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={style.optionsItem}>
                      <span className={style.optionText}>Room</span>
                      <div className={style.optionCounter}>
                        <button
                          disabled={options.room <= 1}
                          className={style.optionCounterButton}
                          onClick={() => {
                            handleOption("room", "d");
                          }}
                        >
                          -
                        </button>
                        <span className={style.optionCounterNumber}>
                          {options.room}
                        </span>
                        <button
                          className={style.optionCounterButton}
                          onClick={() => {
                            handleOption("room", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={style.headerSearchItem}>
                <button className={style.headerButton} onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
