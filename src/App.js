import logo from './logo.svg';
import Login from "./components/Login";
//import Signup from "./components/Signup";
import { Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Payment from "./pages/Payment";
import Card from './pages/Card';
import Button from './pages/Card';
import './App.css';

function App() {
  return (
    

    // So in general please uncomment the particular page that you are working on so that it reflects when you do npm start
       // <About />
      //  <Login />
       //<Signup />  // Uncomment this and comment the login so that you can see signup page
      //  <Navbar />
     // <Card />
     // <Button />
      <Payment />
  );
}

export default App;
