
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
<<<<<<< HEAD
import FeedbackForm from './pages/FeedbackForm';

=======
import { Context } from "./components/context/Context";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> b723b17805e691b5dc8aef9c2afc15c3a85c68f8

import './App.css';

function App() {
      const { user, dispatch, token } = useContext(Context);
  return (
    

<<<<<<< HEAD
    // So in general please uncomment the particular page that you are working on so that it reflects when you do npm start
//<<<<<<< HEAD
     //   <About />
//=======
       // <About />
//>>>>>>> 76ca17a404321657943458c59167cba1285256a3
      //  <Login />
      // <Signup />  // Uncomment this and comment the login so that you can see signup page
       //<Navbar />
       //<Card />
      // <Button />
//<<<<<<< HEAD
     // <ADBoard />
//=======
    //<UserDetail />
//>>>>>>> 76ca17a404321657943458c59167cba1285256a3
      // <AgentList />
      //<Payment />
      //<Upgrade/>
      //<PreArrival/>
     // <Homepage/>
      < FeedbackForm/>
=======
      <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/login"
          element={<Login />}
        />
        </Routes>
        </BrowserRouter>
>>>>>>> b723b17805e691b5dc8aef9c2afc15c3a85c68f8
  );
}

export default App;
