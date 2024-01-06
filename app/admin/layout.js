"use client"
import { useEffect } from "react";
import Header from "./_components/common/Header";
export default function Layout({ children }) {




  useEffect(()=>{
  const check=localStorage.getItem("admin");

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