import React from 'react';

const Input = ({ type, value, handleChange, model, options, values }) => {

  switch (type) {
    case 'text':
    case 'password':
    case 'date':
      return (
        <>
          <input  className=' form-control' name={model} type={type} onChange={handleChange} />
        </>
      );
    case 'radio':
      return (
        <>
          {
            options.map((val,index) => {
              return (
                <>
                  <input className="ms-3" value={values[index]} name={model} type={type} onChange={handleChange} />{val}
                </>
              )
            })
          }
        </>
      )
    case 'checkbox':
      return (
        <>
          {
            options.map((val,ind) => {
              return (
                <>
                  <input className="ms-3" value={values[ind]} name={model} type={type} onChange={handleChange} />{val}
                </>
              )
            })
          }
        </>
      );
  }

}

export default Input;
