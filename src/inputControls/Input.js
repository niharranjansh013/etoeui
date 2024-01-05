import React from 'react';

const Input = ({type,value,handleChange,model}) => {
  return (
    <>
       <input className=' form-control' name={model} type={type} onChange={handleChange} />
    </>
  );
}

export default Input;
