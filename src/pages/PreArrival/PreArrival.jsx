import React, { useState, useContext } from "react";
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

    try {
      await commonApi({
        action: "updateProfile",
        data: {
          userId: user._id,
          demographics: {
            city,
            province,
            ticket: Ticket,
            arrivalDate: date,
            arrivalTime: time
          }
        }
      });

      Toast.success("The form has been successfully submitted");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="text-2xl font-bold mb-4">Pre-Arrival Form</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label
              htmlFor="ticketNumber"
              className="text-sm font-medium text-gray-700"
            >
              Ticket Number (PNR):
            </label>
            <input
              type="text"
              id="ticketNumber"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={Ticket}
              onChange={(event) => setTicket(event.target.value)}
              required=""
            />
            {errors.Ticket && (
              <div className="prearrival-error error">{errors.Ticket}</div>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="arrivalDate"
              className="text-sm font-medium text-gray-700"
            >
              Arrival Date:
            </label>
            <input
              type="date"
              id="arrivalDate"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={date}
              onChange={(event) => setdate(event.target.value)}
              required=""
            />
            {errors.date && (
              <div className="prearrival-error error">{errors.date}</div>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="arrivalTime"
              className="text-sm font-medium text-gray-700"
            >
              Arrival Time:
            </label>
            <input
              type="time"
              id="arrivalTime"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={time}
              onChange={(event) => settime(event.target.value)}
              required=""
            />
            {errors.time && (
              <div className="prearrival-error error">{errors.time}</div>
            )}
          </div>
          <div className="relative">
            <label htmlFor="city" className="text-sm font-medium text-gray-700">
              City:
            </label>
            <input
              type="text"
              id="city"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required=""
            />
            {errors.city && (
              <div className="prearrival-error error">{errors.city}</div>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="province"
              className="text-sm font-medium text-gray-700"
            >
              Province:
            </label>
            <input
              type="text"
              id="province"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={province}
              onChange={(event) => setProvince(event.target.value)}
              required=""
            />
            {errors.province && (
              <div className="prearrival-error error">{errors.province}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PreArrival;
