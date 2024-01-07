"use client"
import React, { useEffect, useState } from 'react'
import ProductUpdate from '../../_components/ProductTable/ProductUpdate'
import axios from 'axios'

const page = ({params}) => {

  useEffect(() => {
    getApi()
  }, [])

  const [data, setData] = useState({})
  const getApi = async () => {
    axios.get(`/api/product?id=${params.id}`).then((res) => {
      console.log(res.data.data)
      setData(res.data.data)
    })
  }

 

  return (
    <>
    {Object.keys(data).length === 0?"Loading...":<ProductUpdate data={data}/>}
    </>
  )
}

export default page