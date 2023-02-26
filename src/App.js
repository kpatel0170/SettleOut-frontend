
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

import './App.css';

function App() {
  const { user, dispatch, token } = useContext(Context);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/login"
          element={token && user ? <Homepage /> : <Login />}
        />
        <Route
          exact
          path="/Upgrade"
          element={token && user ? <Upgrade /> : <Login />}
        />
        <Route
          exact
          path="/About"
          element={token && user ? <About /> : <Login />}
        />
        <Route
          exact
          path="/preArrival"
          element={token && user ? <PreArrival /> : <Login />}
        />
        <Route
          exact
          path="/cards"
          element={token && user ? <Cards /> : <Login />}
        />
        <Route
          exact
          path="/payment"
          element={token && user ? <CardDetails /> : <Login />}
        />
        <Route
          exact
          path="/signup"
          element={token && user ? <Homepage /> : <Signup />}
        />
        <Route
          exact
          path="/"
          element={
            token && user ? (
              user.accountType === "public" ? (
                <Homepage />
              ) : (
                <Homepage />
              )
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/agent-list"
          element={token && user ? <AgentList /> : <Login />}
        />

        <Route
          path="/Student"
          element={
            token && user ? (
              <ADBoard />
            ) : (
              <Login />
            )
          }
        />


      </Routes>
    </BrowserRouter>
  );
}


export default App;
