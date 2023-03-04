import React, { Component } from "react"
import "./Upgrade.css"

class Upgrade extends Component {
    state = {
        text: {
            recipient: '',
            textmessage: '',
            carCompany: '',
            floorArea: '',
            location: ''
        }
    }
  
    render() {
        const { text } = this.state;
        const spacer = {
            margin: 8
        }
        const textArea = {
            borderRadius: 4
        }
        return ( 
            <>
                <div className="about-right">
                    <div className="detail-container">
                        <div className="detailHeading">
                            <h3>Upgrade to become an agent</h3>
                        </div>
                        <form>
                            <div>
                                <div>
                                    <label name="body" htmlFor="body" className="detail-info">Your Name</label>
                                    

                                    <input className="input"  style={textArea} />

                                </div>
                                <div>
                                    <label className="detail-info">Phone Number</label>
                                    <input className="input" type="number" />
                                </div>
                                <div>
                                    <label className="detail-info">Email</label>
                                    <input className="input" type="text" />
                                </div>
                                <div>
                                    <label className="detail-info">Major</label>
                                    <input className="input" type="text" />
                                </div>
                                <div>
                                    <label className="detail-info">City</label>
                                    <input className="input" type="text" size="10"/>
                                </div>
                                <div>
                                    <label className="detail-info">Provience </label>
                                    <input className="input" type="text" size="10"/>
                                </div>
                                <div>
                                    <label className="detail-info">Provience </label>
                                    <input className="input" type="textarea" rows="4" cols="50" />
                                </div>
                                <div className="detailBtn">
                                    <button type="submit"><a href="/">Apply to become an agent !</a></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}


export default Upgrade;