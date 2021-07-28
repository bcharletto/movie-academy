import React, { useEffect, useState } from 'react';
import '../index.css'
import Form from './Form';

const SignUpForm = (props) => {
  const [name, setName] = useState();
  const [errors, setErrors] = useState([]);

  const handleSubmit =(event) => {
    event.preventDefault();
    setErrors([]);
    const newErrors = [];
    if (name === "Julian"){
      newErrors.push("No quiero saber nada de esa persona");
    }
    setErrors(newErrors);
  }

  return (
      <div className={`${props.hidden} ${props.position} ${props.display} signupform text-center`}>
          {errors && <ul> {errors.map((error, index) => <li key={index}>{error}</li>) } </ul> }
            <Form
                value="Name"
                placeHolder="Name"
            />
            <Form
                value="country"
                placeHolder="Country"
                margin="mt-3.5"
            />
            <Form
                value="password"
                placeHolder="Password"
                margin="mt-3.5"
            />
            <Form
                value="confirmpassword"
                placeHolder="Confirm Password"
                margin="mt-3.5"
            />
      </div>
  )
}

export default SignUpForm;

