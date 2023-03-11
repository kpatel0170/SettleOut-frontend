import React, { useState, useEffect } from "react";
import "./UserDetail.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import commonApi from "../../api/common";
import { useNavigate } from "react-router-dom";
import Toast from "../../api/toast";

function UserDetail() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await commonApi({
          action: "getUserDetails",
        });
        setUser(response.DATA);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUserDetails();
  }, []);

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const dob = event.target.elements.dob.value;
    const phone = event.target.elements.phone.value;
    await commonApi({
      action: "updateProfile",
      data: { firstName, lastName, email, dob, phone },
    })
      .then(({ DATA = {}, MESSAGE }) => {
        Toast.success("Profile updated successfully.");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Toast.error("Failed to update profile.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <main className="container">
          <form className="details-form">
            <img
              className="i"
              src="https://cdn.discordapp.com/attachments/1072226973365051522/1078135428781195294/person-icon-1675.png"
              alt="user-img"
            />
            <div className="f-row input-wrapper">
              <label className="inp">
                <input
                  type="text"
                  className="input-text"
                  placeholder="&nbsp;"
                  name="firstName"
                  defaultValue={user.firstName}
                ></input>
                <span className="label">First name</span>
                <span className="input-icon">
                  <i className="fa-solid fa-address-card"></i>
                </span>
              </label>
            </div>
            <div className="f-row input-wrapper">
              <label className="inp">
                <input
                  type="text"
                  className="input-text"
                  placeholder="&nbsp;"
                  name="lastName"
                  defaultValue={user.lastName}
                ></input>
                <span className="label">Last name</span>
                <span className="input-icon">
                  <i className="fa-solid fa-address-card"></i>
                </span>
              </label>
            </div>
            <div className="f-row input-wrapper">
              <label className="inp">
                <input
                  type="email"
                  className="input-text"
                  placeholder="&nbsp;"
                  name="email"
                  defaultValue={user.email}
                ></input>
                <span className="label">Email</span>
                <span className="input-icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
              </label>
            </div>
            <div className="f-row input-wrapper">
              <label className="inp">
                <input
                  type="date"
                  className="input-text"
                  placeholder="&nbsp;"
                  name="dob"
                  defaultValue={user.dob}
                ></input>
                <span className="label">Date of Birth</span>
                <span className="input-icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
              </label>
            </div>
            <div className="f-row input-wrapper">
              <label className="inp">
                <input
                  type="text"
                  className="input-text"
                  placeholder="&nbsp;"
                  defaultValue={user.phone}
                />
                <span className="label">Phone</span>
                <span className="input-icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
              </label>
            </div>

            <button
              onClick={() => handleUpdateProfile()}
              className="btn btn-details"
            >
              Update
            </button>
            <button className="btn btn-details">Cancel</button>
          </form>
        </main>
      </div>

      <Footer />
    </>
  );
}
export default UserDetail;
