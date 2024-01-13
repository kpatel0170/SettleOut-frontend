import React, { useState, useContext } from "react";
import "./PreArrival.css";
import "../../components/Signup/Signup.css";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router";
import commonApi from "../../api/common";
import Toast from "../../api/toast";

const PreArrival = () => {
  const [Ticket, setTicket] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const { dispatch, user } = useContext(Context);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});


  
  


    const handleSubmit = async (event) => {
      event.preventDefault();
    
      // Validate form fields
      const errors = {};
      if (!Ticket) {
        errors.Ticket = "Please enter INR number";
      }
      if (!date) {
        errors.date = "Please select Valid Arrival date";
      }
      if (!time) {
        errors.time = "Please select arrival time";
      }
      if (!city) {
        errors.city = "Please enter city";
      }
      if (!province) {
        errors.province = "Please enter province";
      }
    
      // If there are errors, set the state and exit early
      if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
      }

    await commonApi({
      action: "updateProfile",
      data: {
        userId: user._id,
        demographics: {
          city,
          province,
          ticket: Ticket,
          arrivalDate: date,
          arrivalTime: time,
        },
      },
    })
      .then(({ DATA = {}, MESSAGE }) => {
        Toast.success("The form have been successfully submitted");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="prearrival-box">
        <div className="prearr-head">Pre-Arrival Form</div>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
          <label>Ticket Number (PNR):</label>
            <input
              type="text"
              name="Ticket"
              value={Ticket}
              onChange={(event) => setTicket(event.target.value)}
              required=""
            />
            
            {errors.Ticket && (
              <div className="prearrival-error error">{errors.Ticket}</div>
            )}
          </div>
          <div className="user-box">
          <label>Arrival Date:</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(event) => setdate(event.target.value)}
              required=""
            />
            
            {errors.date && (
              <div className="prearrival-error error">{errors.date}</div>
            )}
          </div>
          <div className="user-box">
          <label>Arrival Time:</label>
            <input
              type="time"
              name="time"
              value={time}
              onChange={(event) => settime(event.target.value)}
              required=""
            />
            
            {errors.time && (
              <div className="prearrival-error error">{errors.time}</div>
            )}
          </div>
          <div className="user-box">
          <label>City:</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required=""
            />
            
            {errors.city && (
              <div className="prearrival-error error">{errors.city}</div>
            )}
          </div>
          <div className="user-box">
          <label>Province:</label>
            <input
              type="text"
              name="province"
              value={province}
              onChange={(event) => setProvince(event.target.value)}
              required=""
            />
            
            {errors.province && (
              <div className="prearrival-error error">{errors.province}</div>
            )}
          </div>

          <button type="submit" className="prearrival-button">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default PreArrival;
