
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./pages/About";
import Payment from "./pages/Payment";
import Cards from "./pages/Cards";
import Upgrade from "./pages/Upgrade";
import PreArrival from "./pages/PreArrival";
// import UserDetail from "./pages/UserDetail";
import Homepage from "./pages/Homepage";
import CardDetails from './components/Card';
import Button from './components/Button';
import AgentList from './pages/AgentList';
import ADBoard from './pages/ADBoard';
import FeedbackForm from './pages/FeedbackForm';

import { Context } from "./context/Context";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";

import './App.css';

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
          element={token && user ? <Homepage /> : <Login />}
        />
        <Route
          exact
          path="/login"
          element={token && user ? <Homepage /> : <Login />}
        />
        <Route
          exact
          path="/Upgrade"
          element={<Login />}
        />
        <Route
          exact
          path="/payment"
          element={<Payment />}
        />
        <Route
          exact
          path="/About"
          element={<About />}
        />
        <Route
          exact
          path="/preArrival"
          element={<PreArrival /> }
        />
        <Route
          exact
          path="/cards"
          element={ <Cards /> }
        />
        <Route
          exact
          path="/payment"
          element={ <CardDetails /> }
        />
        <Route
          exact
          path="/signup"
          element={ <Signup />}
        />
       

        <Route
          exact
          path="/agent-list"
          element={ <AgentList />}
        />

        {/* <Route
          path="/Student"
          element={
            token && user ? (
              <ADBoard />
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
