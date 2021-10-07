import React, { useState } from 'react';
import '../index.css'

const Form = (props) => {
  const [name, setName] = useState();
  const [errors, setErrors] = useState([]);

  const handleSubmit =(event) => {
    event.preventDefault();
    setErrors([]);
    const newErrors = [];
    setErrors(newErrors);
  }

  return (
        <form className="flex flex-col items-center" onSubmit={(event) => handleSubmit(event)}>
            <label for={`${props.value}`}></label>
            <input 
                className={`${props.margin} inputt pl-2.5 font-bold font14px lineheight16`} 
                type={`${props.value}`} 
                placeholder={`${props.placeHolder}`} 
                onChange={(event) => setName(event.target.value)}
                name={`${props.value}`}
                />
        </form>
  )
}

export default Form;

