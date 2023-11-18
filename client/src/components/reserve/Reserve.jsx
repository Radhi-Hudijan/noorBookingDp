import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import style from "./Reserve.module.css";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/api/hotels/rooms/${hotelId}`);


  const { dates } = useContext(SearchContext);

  // getting the dates selected from a range
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // use getTime() to get the time stamp
    const date = new Date(start.getTime());

    let list = [];

    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return list;
  };

  //use the function above to get the booked date list using the search context 
  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  //check if the room number is available
  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  //update the room availabilities
  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/api/rooms/availability/${roomId}`, {
            dates: allDates,
          });

          return res.data;
        })
      );

      setOpen(false);
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className={style.reserve}>
      <div className={style.rContainer}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={style.rClose}
          onClick={() => {
            setOpen(false);
          }}
        />
        <span>Select your rooms:</span>
        {data.map((item) => {
          return (
            <div className={style.rItem} key={item._id}>
              <div className={style.rItemInfo}>
                <div className={style.rTitle}>{item.title}</div>
                <div className={style.rDesc}>{item.desc}</div>
                <div className={style.rMax}>
                  Max people <b>{item.maxPeople}</b>
                </div>
                <div className={style.rPrice}>{item.price}</div>
              </div>

              {/* show room numbers for the same room name */}
              <div className={style.rSelectRooms}>
                {item.roomNumbers.map((roomNumber) => (
                  <div className={style.room}>
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <button onClick={handleClick} className={style.rButton}>
          {" "}
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Reserve;
