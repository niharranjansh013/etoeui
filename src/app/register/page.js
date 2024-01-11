"use client"
import React, { useState } from 'react';
import style from './register.module.css'
import configuration from './configuration.json'
import Link from 'next/link';
import Input from '@/inputControls/Input';
import { Select } from '@/inputControls/Select';
import { Textarea } from '@/inputControls/Textarea';
import axios from 'axios';
import { appStore } from '@/store/appStore';
import { toast } from 'react-toastify';
import { handleFieldValidation, handleFormValidation } from '@/validations/appValidation'
import { formReset } from '@/validations/appValidation';
import { Api } from '@/common/Api';
const Register = () => {
  const [inputControls, setInputControls] = useState(configuration)
  const fnChange = (eve) => {
    setInputControls(handleFieldValidation(eve, inputControls))
  }
  const handleRegister = async () => {
    //if its axios we can get success result with try
    try {
      const [isFormInvalid, clonedInputControls, dataObj] = handleFormValidation(inputControls)
      if (isFormInvalid) {
        setInputControls(clonedInputControls)
        return;
      }
      // alert("send the request Data")
      console.log(dataObj)
      appStore.dispatch({ type: "LOADER", payload: true })
      const res=await Api.fnSendPostReq("std/reg-std", { data: dataObj })
      // const res = await axios.post("http://localhost:2020/std/reg-std", { data: dataObj })
      const { acknowledged, insertedId } = res?.data
      debugger;
      if (acknowledged && insertedId) {
        toast.success("Successfully inserted")
        setInputControls(formReset(inputControls))
      } else {
        toast.error("Not Inserted")
      }
    } catch (ex) {
      console.error("register", ex)
      toast.error("Something went wrong")
    }
    finally {
      appStore.dispatch({ type: "LOADER", payload: false })
    }
  }
  const prepareInputControls = (tag, obj) => {
    switch (tag) {
      case 'input':
        return <Input {...obj} handleChange={fnChange} />
      case 'select':
        return <Select {...obj} handleChange={fnChange} />
      default:
        return <Textarea {...obj} handleChange={fnChange} />
    }
  }
  return (
    <div className=' container-fluid'>
      <h2 className='text-center my-3'>Register</h2>
      {
        //map method contains one obj so we have destrct the purpoties of the object
        inputControls?.map((obj) => {
          const { lbl, errorMessage, tag } = obj
          return <div className='row mb-3'>
            <div className='col-sm-5 text-end'>
              <b>{lbl}</b>
            </div>
            <div className='col-sm-3'>
              {prepareInputControls(tag, obj)}
            </div>
            <div className='col-sm-4'>
              <b className='text-danger '>{errorMessage}</b>
            </div>
          </div>
        })
      }
      <div className='row'>
        <div className=' offset-sm-5 col-sm-7'>
          <button onClick={handleRegister} className='btn btn-primary me-3'>Register</button>
          <Link href="/">To Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
