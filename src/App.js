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
import StudentTask from "./pages/StudentTask";

import { Context } from "./context/Context";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";

import "./App.css";
import Agprofile from "./pages/agProfile/Agprofile.jsx";

function App() {
    const { user, dispatch, token } = useContext(Context);

    return ( 
        <>
            <ReactNotifications />
            <BrowserRouter>
                <Routes>
                <Route 
                    exact
                    path = "/"
                    element = {
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
                    exact 
                    path = "/login"
                    element = { token && user ? < Login /> : < Login /> }
                /> 
                <Route 
                    exact 
                    path = "/upgrade"
                    element = { token && user ? < Upgrade /> : < Login /> }
                /> 
                <Route 
                    exact 
                    path = "/payment"
                    element = { token && user ? < Payment /> : < Login /> }
                /> 
                <Route 
                    exact 
                    path = "/agprofile"
                    element = { token && user ? < Agprofile /> : < Login /> }
                /> 
                <Route 
                    exact 
                    path = "/details"
                    element = { token && user ? < UserDetail /> : < Login /> }
                /> 
                <Route 
                    exact 
                    path = "/feedback"
                    element = { token && user ? < FeedbackForm /> : < Login /> }
                /> 
                <Route 
                    exact 
                    path = "/aboutus"
                    element = { token && user ? < About /> : < Login /> }
                /> 
                <Route 
                    exact 
                    path = "/preArrival"
                    element = { token && user ? < PreArrival /> : < Login /> }
                /> 
                <Route 
                    exact 
                    path = "/membership"
                    element = { token && user ? < Membership /> : < Login /> }
                /> 
                <Route 
                    exact 
                    path = "/payment"
                    element = { token && user ? < Payment /> : < Login /> }
                /> 
                <Route 
                    exact 
                    path = "/signup"
                    element = { token && user ? < Signup /> : < Signup /> }
                />

                <Route
                    exact
                    path = "/"
                    element = {
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
                    exact
                    path = "/agent-list"
                    element = { token && user ? < AgentList /> : < Login /> }
                /> 
                <Route 
                    exact 
                    path = "/agent-board"
                    element = { token && user ? < ADBoard /> : < Login /> }
                /> 
                <Route 
                    path = "/tasks"
                    element = {token && user ? < StudentTask /> : < Login /> }
                />

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