import { useState } from "react";
import "./newHotel.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { hotelInputs } from "../../formSource";

const NewHotel = ( ) => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({})

  // To handle input updates 
  const handleInputChange = (e) => {
    setInfo((prev) =>({ ...prev, [e.target.id]:e.target.value}))
  }

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
                    setFiles(e.target.files);
                  }}
                />
              </div>

              {hotelInputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label> {input.label} </label>
                    <input id={input.id} type={input.type} placeholder={input.placeholder}
                    onChange={handleInputChange}
                    />
                  </div>
                );
              })}

              <button>Send </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
