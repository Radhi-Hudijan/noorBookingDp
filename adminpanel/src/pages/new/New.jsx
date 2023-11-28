import { useState } from "react";
import "./new.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  // to store the input info if the user
  const [info, setInfo] = useState({})

  // To handle input updates 
  const handleInputChange = (e) => {
    setInfo((prev) =>({ ...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    // transform file in the state above to form data
    const data = new FormData()
    data.append('file', file)
    
    //also append the upload preset to the formData
    data.append('upload_preset', 'upload')
    
    //use cloudinary to upload files and photos
    try {
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dk8grjbrm/image/upload",data)
     const {url}=uploadRes.data
     const newUser = {
        ...info, 
        img: url
     }
    
      await axios.post('/api/auth/register',newUser)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(info)
  return (
    <div className="new">
      <Sidebar />
      
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                // creating the image file link 
                file
                  ? URL.createObjectURL(file)
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
                <input
                  type="file"
                  id="file"
                  style={{ display: "None" }}
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </div>

              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label> {input.label} </label>
                    <input type={input.type}
                      placeholder={input.placeholder}
                      id={input.id}
                      onChange={handleInputChange} />
                  </div>
                );
              })}

              <button onClick={handleClick}>Send </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
