"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import OrderDetail from "../_components/OrderDetail";
import { getCookie } from "@/utils/cookie";

export default function page() {

  useEffect(() => {

   const userId=JSON.parse(getCookie("user")); 

   if(!userId){
    location.href="/login"
   }

    getApi(userId)
  }, [])

  const [data, setData] = useState([]);
  const getApi = async (userId) => {
    
    axios.get(`/api/order?id=${userId}`).then((res) => {
      setData(res.data.data)
      console.log(res.data)
    })
}

if (!data) return <h4>Loading</h4>

  return (
    <>
      <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-5">

        <div className="">
          <OrderDetail users={data} />
        </div>
      </section>

    </>
  );
}
