import React from 'react'
import ProductDetail from '../../_components/ProductDetail'

const page = ({params}) => {
  return (
    <>
    <ProductDetail id={params.id}/>
    </>
  )
}

export default page