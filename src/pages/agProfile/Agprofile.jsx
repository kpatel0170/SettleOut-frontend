import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate, useLocation } from "react-router-dom";


const Agprofile = (user) => {
    const { state } = useLocation();
    console.log(state.user);
    const [agent, setAgent] = useState(state.user);
    return (
        <div>
            <Navbar />
            <div>
                <header style={{fontSize: "2em", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    Agent Profile
                </header>
            </div>
            <div style={{ maxWidth: "80%", marginLeft: "10%", marginTop: "5%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2 style={{ fontSize: "1.5em", fontWeight: "500" }}>
                    Name: {agent.firstName} {agent.lastName}
                </h2>
                <div style={{ display: "flex" }}>
                    <h2 style={{ fontWeight: "500", fontSize: "1.5em", marginRight: "2px" }}>About:</h2>
                    <p style={{ fontSize: "1.5em" }}>{agent.bio}</p>
                </div>
                <div style={{ display: "flex" }}>
                    <h2 style={{ fontWeight: "500", fontSize: "1.5em", marginRight: "2px" }}>Home Country:</h2>
                    <p style={{ fontSize: "1.5em" }}>{agent.homeCountry}</p>
                </div>
                <p style={{ fontSize: "1.5em", fontWeight: "500" }}>Agent verified: <b>{agent.isPhoneVerified ? "Yes" : "No"}</b></p>
                <div style={{ display: "flex" }}>
                    <h2 style={{ fontWeight: "500", fontSize: "1.5em", marginRight: "2px" }}>Education:</h2>
                    <p style={{ fontSize: "1.5em" }}>{agent.year}nd year, major: {agent.major}</p>
                </div>
                <div style={{display: "flex"}}>
                    <h2 style={{ fontWeight: "500", fontSize: "1.5em", marginRight: "5px" }}>About:</h2>
                    <p style={{ fontSize: "1.5em" }}><b style={{ color: "#FACC15" }}>{agent.ratings}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Agprofile