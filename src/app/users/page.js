"use client"
import { Api } from '@/common/Api';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Users = () => {
    // const[user,setUsers]=useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
        fnGetUsers();
    },[])
    const fnGetUsers=async()=>{
        try{
            dispatch({type:"LOADER",payload:true})
          const res=  await Api.fnSendGetReq('std/get-std')
            console.log(res)
    }catch(ex){
        console.error("users",ex)
    }finally{
        dispatch({type:"LOADER",payload:false})
    }
}
  return (
    <div>
      users
    </div>
  );
}


export default Users;
