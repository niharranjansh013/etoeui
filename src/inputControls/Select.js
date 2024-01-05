"use client"
import React from 'react';

export const Select = ({ type, value, handleChange, model, options, values }) => {
    return (
        <>
          <select className=' form-control' name={model} onChange={handleChange} >
            <option value="">---please select---</option>
            {
                options.map((val,ind)=>{
                    return<>
                        <option key={`options_${ind}`} value={values[ind]}>{val}</option>
                    </>
                })
            }
          </select>
        </>
      );

}


