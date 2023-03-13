import React, { useState, useContext } from "react";
import "./PreArrival.css";
import "../../components/Signup/Signup.css";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router";
import commonApi from "../../api/common";
import Toast from "../../api/toast";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
      <Navbar />
      <div className="prearrival-box">
        <div className="prearr-head">Pre-Arrival Form</div>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="Ticket"
              value={Ticket}
              onChange={(event) => setTicket(event.target.value)}
              required=""
            />
            <label>INR Number:</label>
            {errors.Ticket && (
              <div className="prearrival-error">{errors.Ticket}</div>
            )}
          </div>
          <div className="user-box">
            <input
              type="date"
              name="date"
              value={date}
              onChange={(event) => setdate(event.target.value)}
              required=""
            />
            <label>Arrival Date</label>
            {errors.date && (
              <div className="prearrival-error">{errors.date}</div>
            )}
          </div>
          <div className="user-box">
            <input
              type="time"
              name="time"
              value={time}
              onChange={(event) => settime(event.target.value)}
              required=""
            />
            <label>Arrival Time</label>
            {errors.time && (
              <div className="prearrival-error">{errors.time}</div>
            )}
          </div>
          <div className="user-box">
            <input
              type="text"
              name="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required=""
            />
            <label>City:</label>
            {errors.city && (
              <div className="prearrival-error">{errors.city}</div>
            )}
          </div>
          <div className="user-box">
            <input
              type="text"
              name="province"
              value={province}
              onChange={(event) => setProvince(event.target.value)}
              required=""
            />
            <label>Province:</label>
            {errors.province && (
              <div className="prearrival-error">{errors.province}</div>
            )}
          </div>

          <button type="submit" className="prearrival-button">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PreArrival;
