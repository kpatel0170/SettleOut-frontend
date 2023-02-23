import React, { useState, useEffect } from 'react';
import "./ADBoard.css";


function ADBoard  ({ featured = false, children = null }){return (
<>
<div className="container">
    <ul className="cards">
      <li className="card">
        <div>
          <div className="row">
            <div className="column"> </div>
            <div className="column">
              <h3 className="card-title"><b>John Doe</b></h3>
              <br></br>
            </div>
          </div>
          <div className="card-content">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
          </div>
        </div>
        <div className="card-link-wrapper">
          <a href="" className="wp-block-button__link has-base-color has-text-color has-text-align-center wp-element-button card-link">Tasks</a>
        </div>
      </li>
      <li className="card">
        <div>
          <div className="row">
            <div className="column"> </div>
            <div className="column">
              <h3 className="card-title"><b>John Doe</b></h3>
              <br></br>
            </div>
          </div>
          <div className="card-content">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</p>
          </div>
        </div>
        <div className="card-link-wrapper">
          <a href="" className="wp-block-button__link has-base-color has-text-color has-text-align-center wp-element-button card-link">Tasks</a>
        </div>
      </li>
      <li className="card">
        <div>
          <div className="row">
            <div className="column"> </div>
            <div className="column">
              <h3 className="card-title"><b>John Doe</b></h3>
              <br></br>
            </div>
          </div>
          <div className="card-content">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
          </div>
        </div>
        <div className="card-link-wrapper">
          <a href="" className="wp-block-button__link has-base-color has-text-color has-text-align-center wp-element-button card-link">Tasks</a>
        </div>
      </li>
   
      <li className="card">
        <div>
          <div className="row">
            <div className="column">  </div>
            <div className="column">
              <h3 className="card-title"><b>John Doe</b></h3>
              <br></br>
            </div>
          </div>
          <div className="card-content">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
          </div>
        </div>
        <div className="card-link-wrapper">
          <a href="" className="wp-block-button__link has-base-color has-text-color has-text-align-center wp-element-button card-link">Tasks</a>
        </div>
      </li>
    </ul>
  </div>


</>


    );
}

export default ADBoard;