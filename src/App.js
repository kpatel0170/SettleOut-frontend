import logo from './logo.svg';
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    

    // So in general please uncomment the particular page that you are working on so that it reflects when you do npm start
       <Login />
       //<Signup />  // Uncomment this and comment the login so that you can see signup page
   
  );
}

export default App;
