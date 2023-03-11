import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./pages/About";
import Payment from "./pages/Payment";
import Membership from "./pages/Cards";
import Upgrade from "./pages/Upgrade";
import PreArrival from "./pages/PreArrival";
import UserDetail from "./pages/UserDetail";
import Homepage from "./pages/Homepage";
import Button from "./components/Button";
import AgentList from "./pages/AgentList";
import ADBoard from "./pages/ADBoard";
import FeedbackForm from "./pages/FeedbackForm";

import { Context } from "./context/Context";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";

import "./App.css";

function App() {
  const { user, dispatch, token } = useContext(Context);

  return (
    <>
      <ReactNotifications />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              token && user ? (
                user.accountType === "public" ? (
                  <Homepage />
                ) : (
                  <ADBoard />
                )
              ) : (
                <Homepage />
              )
            }
          />
          <Route
            exact
            path="/login"
            element={user ? <Homepage /> : <Login />}
          />
          <Route exact path="/Upgrade" element={<Upgrade />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/details" element={<UserDetail />} />
          <Route exact path="/feedback" element={<FeedbackForm />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/preArrival" element={<PreArrival />} />
          <Route exact path="/membership" element={<Membership />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/signup" element={<Signup />} />

          <Route exact path="/agent-list" element={<AgentList />} />
          <Route exact path="/agent-board" element={<ADBoard />} />

          {/* <Route
          path="/student"
          element={
            token && user ? (
              <Student />
            ) : (
              <Login />
            )
          }
        /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
