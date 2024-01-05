"use client"
import React from 'react';

export const Textarea = ({value, handleChange, model }) => {
    return (
        <>
          <textarea className=' form-control' name={model} onChange={handleChange} />
        </>
      );

}


