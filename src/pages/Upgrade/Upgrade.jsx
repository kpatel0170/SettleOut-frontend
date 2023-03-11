import React from "react";
import "./Upgrade.css";
import { useNavigate } from "react-router";
import Toast from "../../api/toast";

const Upgrade = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    Toast.success(
      "We have recieved your application. We will get back to you soon!!"
    );
    navigate("/");
  };

  return (
    <>
      <div className="Upcontainer">
        <main className="Up-container">
          <div className="Upheading-primary">Apply to become an agent</div>
          <form onSubmit={handleSubmit} className="Up-form">
            <label htmlFor="name" className="Up-label">
              Name:
            </label>
            <input type="text" name="name" className="Up-input" />

            <label htmlFor="email" className="Up-label">
              Email:
            </label>
            <input type="email" name="email" className="Up-input" />

            <label htmlFor="why" className="Up-label">
              Why do you want to become an agent?
            </label>
            <textarea type="text" name="why" className="Up-input" />

            <label htmlFor="bio" className="Up-label">
              Enter yout bio for your profile:
            </label>
            <textarea type="text" name="bio" className="Up-input" />

            <label htmlFor="city" className="Up-label">
              City:
            </label>
            <input type="text" name="city" className="Up-input" />
            <label htmlFor="province" className="Up-label">
              Province:
            </label>
            <input type="text" name="province" className="Up-input" />

            <button type="submit" className="Up-button">
              Apply
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Upgrade;
