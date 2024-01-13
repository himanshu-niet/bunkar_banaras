"use client"
import {setCookie,  getCookie } from '@/utils/cookie';
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

  useEffect(()=>{
    if(getCookie('user')){
      location.href="/order"
    }
  },[])

const [email,setEmail]=useState("");
const [password,setPass]=useState("");


const handdleSubmit=()=>{
  axios.post("api/signin",{email,password}).then((res)=>{
    console.log(res)
   if( res.data.success){
    setCookie("user",JSON.stringify(res.data.data.id))
    location.href="/shopingcart"
   }
   else{
    alert("Email Password Not Match")
   }
  }).catch((err)=>{
    console.log(err)
    alert("Email Not Found")
  })
}


  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto md:h-screen lg:py-0">
    
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <div  className="space-y-4 md:space-y-6" method='post'>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e)=>setPass(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
         
          <button
            onClick={handdleSubmit}
            className="w-full text-white  btn-m-lm  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Sign in
          </button>

        


          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              href="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"

            >
              Sign up
            </Link>
          </p>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {" "}
            <Link
              href="/resetPassword"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"

            >
            Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page