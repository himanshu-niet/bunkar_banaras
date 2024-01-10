"use client"
import useCartStore from '@/utils/store/cart';
import { useFormik } from "formik";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import Tr from '../_components/Tr';
import { calculateTotalCost } from '@/utils/fetuers';
import Link from 'next/link';
import { getCookie } from '@/utils/cookie';
const page = () => {

  const [userId,setUserId]=useState();

  useEffect(()=>{
setUserId(JSON.parse(getCookie("user")));
  },[])

  const cartItems = useCartStore(state => state.cartItems);

  const { clearCart } = useCartStore();


  const formik = useFormik({
    initialValues: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "India",
    },
    onSubmit: (values,{resetForm}) => {

      if(!cartItems.length>0){
        alert("Cart is Empty..")
        resetForm();
        return
      }

      
      let products= cartItems.map((cartItem) => ({
        productId: cartItem.id,
        quantity: cartItem.quantity,
        total: (cartItem.discountPrice*cartItem.quantity).toFixed(2),
        title:cartItem.title,
        desc:cartItem.desc,
        price:cartItem.price,
        discount:cartItem.discount,
        category:cartItem.category,
        subCategory:cartItem.subCategory,
        color:cartItem.color,
        stock:cartItem.stock,
        images:cartItem.images[0].url 
      }))
     
      let total = products.reduce((acc, product) => {
        return acc + parseFloat(product.total);
      }, 0);

      let data={
        "userId": userId,
        "total": total.toFixed(2),
        "paymentInfo": {
          "amount": total,
          "mode": "COD"
        },
        "products":products,
        "address": {
          "street": values.street,
          "city": values.city,
          "state": values.state,
          "postalCode": values.postalCode,
          "country": values.country
        }
      }

     

        axios.post('/api/order', data)
            .then(function (response) {
                alert("Order Created Succesfully")
                clearCart()
                location.href = "/order";
            })
            .catch(function (error) {
                alert("Order Not Created")
            });
    },
});


  return (
    <>
    {/* breadcrumb */}
    
    <div className="container lg:mt-20">
      <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
        <a href="/" className="stext-109 cl8 hov-cl1 trans-04">
          Home
          <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
        </a>
        <span className="stext-109 cl4">Shoping Cart</span>
      </div>
    </div>
    {/* Shoping Cart */}
    <div className="bg0 p-t-75 p-b-85">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
            <div className="m-l-25 m-r--38 m-lr-0-xl">
             
            <div className="wrap-table-shopping-cart">
                <table className="table-shopping-cart">
                
                <thead>
                    <tr className="table_head">
                      <th className="column-1">Product</th>
                      <th className="column-2" />
                      <th className="column-3">Price</th>
                      <th className="column-4">Quantity</th>
                      <th className="column-5">Total</th>
                    </tr>
                    </thead>
                    <tbody>

                    {cartItems.map((item,idx)=>{
                      return <Tr key={idx} item={item}/>
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                <div className="flex-w flex-m m-r-20 m-tb-5">
                  <input
                    className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
                    type="text"
                    name="coupon"
                    placeholder="Coupon Code"
                  />
                  <div className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                    Apply coupon
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
            <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
              <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
              <div className="flex-w flex-t bor12 p-b-13">
              <div className="size-208">
                <span className="mtext-101 cl2">Total:</span>
              </div>
              <div className="size-209 p-t-1">
                <span className="mtext-110 cl2">₹{calculateTotalCost(cartItems).toFixed(2)}</span>
              </div>
            </div>
              
           {userId ?
             <div>
           <div className='pt-4 pb-2'> <span className="stext-110 cl2">Shipping Address:</span></div>
              <form className='pb-8' onSubmit={formik.handleSubmit} method="POST">
              {/* Grid */}
              <div className="grid sm:grid-cols-12 gap-2">

              
            <div className="col-span-12 ">
           
              <input
                id="af-account-email"
                type="text"
                className="py-2 px-3 pe-11 block w-full border border-gray-800 shadow-md text-md rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Enter Street"
                name="street"
                onChange={formik.handleChange}
                value={formik.values.street}
                required
              />
            </div>
            <div className="col-span-12">
              <input
                id="af-account-email"
                type="text"
                className="py-2 px-3 pe-11 block w-full border border-gray-800 shadow-md text-md rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Enter City"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                required
              />
            </div>
            <div className="col-span-12">
           
              <input
                id="af-account-email"
                type="text"
                className="py-2 px-3 pe-11 block w-full border border-gray-800 shadow-md text-md rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Enter State"
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                required
              />
            </div>

            <div className="col-span-12">
              <input
                id="af-account-email"
                type="text"
                className="py-2 px-3 pe-11 block w-full border border-gray-800 shadow-md text-md rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Enter Pin Code"
                name="postalCode"
                onChange={formik.handleChange}
                value={formik.values.postalCode}
                required
              />
            </div>
              </div>
              <button type="submit" className="mt-4 flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
              Proceed to Checkout
             </button>

            

              </form>
              
              </div>: <Link href={"/login"} className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
              Login To Proceed
            </Link>
            }

            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default page