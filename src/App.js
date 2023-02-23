import logo from './logo.svg';
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Payment from "./pages/Payment";
import Upgrade from "./pages/Upgrade";
import PreArrival from "./pages/PreArrival";
import UserDetail from "./pages/UserDetail";
import Homepage from "./pages/Homepage";
import Card from './pages/Card';
import Button from './pages/Card';
import AgentList from './pages/AgentList';
import ADBoard from './pages/ADBoard';

import './App.css';

function App() {
  return (
    

    // So in general please uncomment the particular page that you are working on so that it reflects when you do npm start
<<<<<<< HEAD
     //   <About />
=======
       // <About />
>>>>>>> 76ca17a404321657943458c59167cba1285256a3
      //  <Login />
      // <Signup />  // Uncomment this and comment the login so that you can see signup page
       <Navbar />
       //<Card />
      // <Button />
<<<<<<< HEAD
      <ADBoard />
=======
    //<UserDetail />
>>>>>>> 76ca17a404321657943458c59167cba1285256a3
      // <AgentList />
      //<Payment />
      //<Upgrade/>
      //<PreArrival/>
      //<Homepage/>
  );
}

export default App;
