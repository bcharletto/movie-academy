import React, { useEffect, useState } from 'react';
import '../index.css'
import Form from './Form';
import Button from './Button';


const LoginForm = (props) => {
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
        <div>
          {errors && <ul> {errors.map((error, index) => <li key={index}>{error}</li>) } </ul> }
            
            <Form
                value="email"
                placeHolder="Email"           
            />
            <Form
                value="password"
                placeHolder="Password"
                margin="mt-3.5"
            />
            <Button
                actionName="LOG IN NOW"
                bottomOrTopBtn="bottombutton"
                btnType="submit"
                margin="mt-9"
                flex="flex"
                justifyContent="justify-center"
            />
      </div>
  )
}

export default LoginForm;

