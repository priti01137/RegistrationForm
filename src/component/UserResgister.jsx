import React from 'react';
import { addMembers } from '../Services/MemberService';
import { toast, ToastContainer } from 'react-toastify';




function UserRegistration() {

  const submitHandler=(e)=>{

   e.preventDefault();
   addMembers({

    email:e.target.email.value,
    fullName:e.target.fullName.value,
    username:e.target.username.value,
    password:e.target.password.value,
    phoneNumber:e.target.phoneNumber.value
   }).then(data=>{
    return data;
   }).then(()=>{
    toast.success("Registered Succesfully!");
    e.target.reset();
   })

  }

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1 className="app-logo">UserRegistration</h1>
        
        <form className="registration-form" onSubmit={submitHandler}>
          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          {/* Full Name */}
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
          </div>

          {/* Username */}
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

           {/* phoneNumber */}
           <div className="form-group">
            <input
              type="tel"
              name="PhoneNumber"
              placeholder="PhoneNumber"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Sign up
          </button>
        </form>

        
      </div>

      <div className="login-redirect">
        Have an account? <a href="/login">Log in</a>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default UserRegistration;
