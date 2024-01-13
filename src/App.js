import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";

import { Context } from "./context/Context";

import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./pages/About";
import Payment from "./pages/Payment";
import Membership from "./pages/Cards";
import Upgrade from "./pages/AUpgrade";
import PreArrival from "./pages/PreArrival";
import UserDetail from "./pages/UserDetail";
import Homepage from "./pages/Homepage";
import Button from "./components/Button";
import AgentList from "./pages/AList";
import ADBoard from "./pages/ABoard";
import FeedbackForm from "./pages/FeedbackForm";
import StudentTask from "./pages/ATasks";
import ContactUs from "./pages/ContactUs";
import AProfile from "./pages/AProfile/AProfile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const { user, token } = useContext(Context);

  return (
    <>
      <ReactNotifications />
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={token && user ? <Login /> : <Login />}
          />
          <Route
            path="/signup"
            element={token && user ? <Signup /> : <Signup />}
          />
          <Route
            path="/aboutus"
            element={token && user ? <About /> : <Login />}
          />
          <Route
            path="/contactus"
            element={token && user ? <ContactUs /> : <ContactUs />}
          />

          {/* Private Routes */}
          <Route
            path="/"
            element={
              token && user ? (
                user.accountType === "public" ? (
                  <Homepage />
                ) : (
                  <ADBoard />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/upgrade"
            element={token && user ? <Upgrade /> : <Login />}
          />
          <Route
            path="/payment"
            element={token && user ? <Payment /> : <Login />}
          />
          <Route
            path="/aprofile"
            element={token && user ? <AProfile /> : <Login />}
          />
          <Route
            path="/details"
            element={token && user ? <UserDetail /> : <Login />}
          />
          <Route
            path="/feedback"
            element={token && user ? <FeedbackForm /> : <Login />}
          />
          <Route
            path="/preArrival"
            element={token && user ? <PreArrival /> : <Login />}
          />
          <Route
            path="/membership"
            element={token && user ? <Membership /> : <Login />}
          />

          {/* Other Private Routes */}
          <Route
            path="/agent-list"
            element={token && user ? <AgentList /> : <Login />}
          />
          <Route
            path="/agent-board"
            element={token && user ? <ADBoard /> : <Login />}
          />
          <Route
            path="/tasks"
            element={token && user ? <StudentTask /> : <Login />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
