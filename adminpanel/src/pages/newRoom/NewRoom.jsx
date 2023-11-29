import { useState } from "react"
import "./newRoom.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import { roomInputs } from "../../formSource"
import useFetch from "../../hooks/useFetch"
import axios from "axios"

const NewRoom = () => {
  const [info, setInfo] = useState({})

  // store rooms id
  const [hotelId, setHotelId] = useState(undefined)

  //store rooms from textArea
  const [rooms, setRooms] = useState([])

  //To fetch all hotels
  const { data, loading, error } = useFetch("/api/hotels")

  // To handle input updates
  const handleInputChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  //To handle hotel selection
  const handleSelect = (e) => {
    setHotelId(e.target.value)
  }

  const handleClick = async (e) => {
    e.preventDefault()

    //split the room numbers from the textArea and covert to Array
    const roomNumbers = rooms.split(",").map((roomNo) => {
      return { number: roomNo }
    })

    try {
      const newRoom = {
        ...info,
        roomNumbers,
      }
      await axios.post(`/api/rooms/${hotelId}`, newRoom)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label> {input.label} </label>
                    <input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      onChange={handleInputChange}
                    />
                  </div>
                )
              })}

              <div className="formInput">
                <label onChange={handleInputChange}> Room Numbers </label>
                <textarea
                  placeholder="Give comma between room numbers"
                  onChange={(e) => {
                    setRooms(e.target.value)
                  }}
                ></textarea>
              </div>

              <div className="formInput">
                <label> Choose Hotel </label>
                <select id="hotelId" onChange={handleSelect}>
                  {loading
                    ? " Loading"
                    : data &&
                      data.map((hotel) => {
                        return (
                          <option key={hotel._id} value={hotel._id}>
                            {hotel.name}
                          </option>
                        )
                      })}
                </select>
              </div>
              <button onClick={handleClick}>Send </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewRoom
