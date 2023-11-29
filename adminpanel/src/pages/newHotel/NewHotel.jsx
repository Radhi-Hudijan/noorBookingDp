import { useState } from "react"
import "./newHotel.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import { hotelInputs } from "../../formSource"
import useFetch from "../../hooks/useFetch"

const NewHotel = () => {
  const [files, setFiles] = useState("")
  const [info, setInfo] = useState({})

  // store rooms id
  const [rooms, setRooms] = useState([])

  //To fetch all rooms

  const { data, loading, error } = useFetch("/api/rooms")

  // To handle input updates
  const handleInputChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSelect = (e) => {
    // transfer HTML collection to array and get the value
    const value = Array.from(e.target.selectedOptions, (option) => option.value)
    setRooms(value)
  }

  console.log(rooms)

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Hotel</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                // creating the image file link
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />{" "}
                </label>

                {/* uploading multiple files */}
                <input
                  type="file"
                  id="file"
                  multiple
                  style={{ display: "None" }}
                  onChange={(e) => {
                    setFiles(e.target.files)
                  }}
                />
              </div>

              {hotelInputs.map((input) => {
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
                <label> Featured </label>

                <select id="featured" onChange={handleInputChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>

              <div className="selectRooms">
                <label> Rooms </label>

                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? "Loading "
                    : data &&
                      data.map((room) => {
                        return (
                          <option key={room._id} value={room._id}>
                            {room.title}
                          </option>
                        )
                      })}
                </select>
              </div>

              <button>Send </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewHotel
