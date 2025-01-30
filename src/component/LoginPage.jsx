import React from 'react'


function LoginPage() {
  return (
    <div>

<div class="login-container"/>
        <div class="login-header">
            <h1>Library Login</h1>
        </div>
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required/>
            </div>
            <button type="submit" class="login-button">Login</button>
            <p class="forgot-password"><a href="#">Forgot Password?</a></p>
            <div className="login-redirect">
        D0n't have an account? <a href="/login">Sign Up</a>
      </div>
        </form>
        <div class="login-footer"/>
         <div class="login-container">
        
        </div>



        
    </div>
  )
}

export default LoginPage