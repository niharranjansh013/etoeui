"use client"
import React, { useState } from 'react';
import './Login.module.css'
import Link from 'next/link';
import configuration from './configuration.json'
// import Input from '@/inputControls/input';
import Input from '@/inputControls/Input';
import {handleFieldValidation,handleFormValidation} from '@/validations/appValidation'
import { Api } from '@/common/Api';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Cookies } from '@/common/cookies';
export const Login = () => {
  const[inputControls,setInputControls]=useState(configuration)
  const dispatch=useDispatch()  //alternate to appstore.dispatch
    //get the data from input
    const fnChange=(eve)=>{ 
       setInputControls(handleFieldValidation(eve,inputControls)) 
    }
    const handleLogin=async()=>{
      try{
     const[isFormInvalid,clonedInputControls,dataObj]=handleFormValidation(inputControls)
     if(isFormInvalid){
      setInputControls(clonedInputControls)
      return;
     }
     dispatch({type:"LOADER",payload:true})
     const res=await Api.fnSendPostReq("std/login",{data:dataObj})
     
     if(res?.data?.length){
      const{token, _id}=res?.data[0]
      dispatch({type:"AUTH",payload:true})
      Cookies.setItem("token",token)
      Cookies.setItem("id", _id)
     }else{
      toast.error("please check uid or password")
     }
     console.log(11,res.data)
    }catch(ex){

    }finally{
      dispatch({type:"LOADER",payload:false})
    }
    }
  return (
    <div className=' container-fluid'>
      <h2 className='text-center my-3'>Login</h2>
      {
        //map method contains one obj so we have destrct the purpoties of the object
        inputControls?.map(({lbl,tag,type,errorMessage,value,model},index)=>{
            return <div key={`div_${index}`} className='row mb-3'>
            <div className='col-sm-5 text-end'>
                <b>{lbl}</b>
            </div>
            <div className='col-sm-3'>
               <Input model={model} type={type} value={value} handleChange={fnChange}/>
            </div>
            <div className='col-sm-4'>
                <b className='text-danger '>{errorMessage}</b>
            </div>
          </div>
        })
      }
      <div className='row'>
        <div className=' offset-sm-5 col-sm-7'>
          <button onClick={handleLogin} className='btn btn-primary me-3'>Login</button>
         <Link href="/register">To Register</Link>
        </div>
      </div>
    </div>
  );
}

