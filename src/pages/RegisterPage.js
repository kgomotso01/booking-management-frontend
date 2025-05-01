import React from 'react';

function RegisterPage() {
  return (
    <div className="page">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Name" required /><br/>
        <input type="email" placeholder="Email" required /><br/>
        <input type="password" placeholder="Password" required /><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
