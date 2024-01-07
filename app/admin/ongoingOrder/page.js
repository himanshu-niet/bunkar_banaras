"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import ProductOngoing from "../_components/ProductTable/ProductOngoing";

export default function page() {

  useEffect(()=>{
getApi()
  },[])

  const [data,setData]=useState([]);

  const getApi=async ()=>{
    axios.get("/api/admin/product/ongoing").then((res)=>{
      setData(res.data.data)
    })
  }

  return (
   <>
   
   <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-5">
   
   <div className="">
   <ProductOngoing users={data}/>
   </div>
   </section>

   </>
  );
}
