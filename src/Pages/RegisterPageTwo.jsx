
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import RegisterPageOne from './RegisterPageOne';

const RegisterPageTwo = () => {
    

  return (
    <>

<div>
<label>Address:</label>
        <input type="text" name="username" placeholder='username' />
        <label>Mobile:</label>
        <input type="email" name="email" placeholder='email' />
        <button><Link to="/register/one"/>prev</button>
        <button><Link to="/dashboardnp"/>Next</button>
    </div>
    </>
  )
}

export default RegisterPageTwo