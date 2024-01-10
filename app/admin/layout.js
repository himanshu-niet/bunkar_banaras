"use client"
import { useEffect } from "react";
import Header from "./_components/common/Header";
import { getCookie } from "@/utils/cookie";
export default function Layout({ children }) {




  useEffect(()=>{
  const check=getCookie("admin");

    if(!check){
      location.href="/admin-login"
  
      return <h1>Plz Login</h1>
    }
  },[])

  return (
    <>
   <Header/>

    <main>{children}</main>
 
    </>
  )
}