import React, { useState } from 'react';
import './Signup.css'
const Signup = () => {
  // Use the useState hook to create "username", "email", "password", and "confirmPassword" state variables
  const [username, setUsername] = useState('');
  const [date, setdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Use the useState hook to create an error state variable, which will be used to display any form validation errors
  const [errors, setErrors] = useState({});

  // Create a function to validate the form
  const validateForm = () => {
    // Set the errors object to an empty object
    setErrors({});
  
    // Create a new errors object that will be used to update the errors state variable
    const newErrors = {};
  
    // Validate the username, email, password, and confirmPassword fields using regex
    if (username.trim().length === 0) {
      newErrors.username = 'Username is required';
    }
    if (email.trim().length === 0) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (password.trim().length === 0) {
      newErrors.password = 'Password is required';
    } else if (password.trim().length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(password)) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(password)) {
      newErrors.password = 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character';
    }
    if (confirmPassword.trim().length === 0) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Set the errors state variable to the new errors object
    setErrors(newErrors);

    // Return true if the errors object is empty, false if it is not
    return Object.keys(newErrors).length === 0;
  };

      
 


  // Create a function to handle the form submission
  const handleSubmit = event => {
    event.preventDefault();

    // Validate the form
    validateForm();

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // TODO: Add code to submit the form here (e.g. make a request to a server to create a new user account)
    }
  };

  return (

    <>
    <div className="container">
    <main className="signup-container">  
    <h1 className="heading-primary">Create new account<span className="custom-dot">.</span></h1>
    <p className="text-mute">Already A Member? <a href="$">Log in</a></p>
      <form onSubmit={handleSubmit} className="signup-form">
      <label htmlFor="username" className="signup-label">User Name:</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={event => setUsername(event.target.value)}
        className="signup-input"
     />
      {errors.username && <div className="signup-error">{errors.username}</div>}

      <label htmlFor="email" className="signup-label">Email Address:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        className="signup-input" />
      {errors.email && <div className="signup-error">{errors.email}</div>}

       {/* ####################################################################################################################### 
       need to change the date value for date of birth  */}
      <label htmlFor="dateofbirth" className="signup-label">Date of Birth:</label>
      <input
        type="date"
        name="date"
        onChange={event => setdate(event.target.value)}
        className="signup-input"
        label= "Date"/>

     {errors.date && <div className="signup-error">{errors.date}</div>}
      <label htmlFor="password" className="signup-label">Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        className="signup-input" />
      {errors.password && <div className="signup-error">{errors.password}</div>}
      <label htmlFor="confirmPassword" className="signup-label">Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={event => setConfirmPassword(event.target.value)}
        className="signup-input" />
      {errors.confirmPassword && <div className="signup-error">{errors.confirmPassword}</div>}
      <button type="submit" className="signup-button">Sign Up</button>
    </form>
    </main>
    <div className="welcome-container">
    <h1 className="heading-secondary">Welcome to <span className="lg">SettleOUT! <br></br></span>
    <span> Your One Stop Navigator for Your New Life In Regina</span> </h1>
    <br></br>
   
  </div>
    </div>
    
    
    </>

  );  
};

export default Signup;
