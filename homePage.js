import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./homePage1.css";
import Poster from '../../img/Group.png';

function homePage() {

const locations = () => [
  { label: "Gunupur" },
  { label: "Bhubaneswar" },
  { label: "Cuttack" },
  { label: "Puri" },
  { label: "Rourkela" },
];
  return (
    // <div className="container">
    //   <p className="text">More than Faster</p>

    //   <div className="content">
    //     <div className="content-inline">
          
    //       <div className="content1">
    //         <h1>
    //           Fastest, Simple & Hassel - Free{" "}
    //           <span style={{ color: "#BC0202" }}>Booking</span>
    //         </h1>
    //         <p className="subcontent">
    //           Our job is to filling your tummy with delicious food and with fast
    //           and free delivery
    //         </p>
    //       </div>

    //       <div className="content2">
    //         <img src={Poster} alt="undraw-Order-received-re-3o7m" border="0" />
    //       </div>
    //     </div>
    //     <div className="location">
    //         <Autocomplete
    //           disablePortal
    //           id="combo-box-demo"
    //           options={locations()}
    //           sx={{ width: 300 }}
    //           renderInput={(params) => <TextField {...params} label="Location" />}
    //         />

    //         <div className="search">
    //           <TextField
    //             id="outlined-basic"
    //             label="Search Restaurant"
    //             variant="outlined"
    //           />
    //         </div>
    //     </div>

    //   </div>
    // </div>

    <div className="container">

      <div className="content1">
        <p className="text">More than Faster</p>

        <div className="header">
          <h1>
            Fastest, Simple & Hassel - Free{" "}
            <span style={{ color: "#BC0202" }}>Booking</span>
          </h1>
            <p className="subcontent">
              Our job is to filling your tummy with delicious food and with fast
              and free delivery
            </p>
        </div>

        <div className="location">
          <div className="autoComplete">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={locations()}
                sx={{ width: 120 }}
                renderInput={(params) => <TextField {...params} label="Location" />}
              />
          </div>
            <div className="search">
              <TextField
                id="outlined-basic"
                label="Search Restaurant"
                variant="outlined"
              />
            </div>
            
            
        </div>
      </div>
      
      <div className="content2">
        <img src={Poster} alt="undraw-Order-received-re-3o7m" border="0" />
      </div>
    </div>
  );
}

export default homePage;
