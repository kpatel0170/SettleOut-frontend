
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Payment from "./pages/Payment";
import Upgrade from "./pages/Upgrade";
import PreArrival from "./pages/PreArrival";
// import UserDetail from "./pages/UserDetail";
import Homepage from "./pages/Homepage";
import Card from './pages/Card';
import Button from './pages/Card';
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
          element={<Login />}
        />
        
        <Route
          exact
          path="/signup"
          element={<Signup />}
        />
        <Route
          exact
          path="/payment"
          element={<Payment />}
        />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
