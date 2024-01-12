"use client"
import { Api } from '@/common/Api';
import { Cookies } from '@/common/cookies';
import { appStore } from '@/store/appStore';
import React, { useEffect } from 'react';

const Profile = () => {
    useEffect(()=>{
        getUserById();
    },[])
    const getUserById=async()=>{
        appStore.dispatch({type:"LOADER",payload:true})
        try{
      const res=await Api.fnSendGetReq(`std/get-std-by-id?id=${Cookies.getItem("id")}`)
      console.log(res.data)
        }catch(ex){
            console.error(ex)
        }finally{
            appStore.dispatch({type:"LOADER",payload:false})

        }
    }
  return (
    <div>
      profile
    </div>
  );
}

export default Profile;
