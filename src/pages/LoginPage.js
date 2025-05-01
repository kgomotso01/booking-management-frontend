import React from 'react';

function LoginPage() {
  return (
    <div className="page">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" required /><br/>
        <input type="password" placeholder="Password" required /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
