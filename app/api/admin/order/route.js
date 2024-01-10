import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


    export async function GET(request){
      try {
          const order = await prisma.order.findMany({
            orderBy: {
              createdAt: 'desc',
            },  
            include: {
                address:true,
                returnInfo:true,
                orderItem:true
                }
            })
          return NextResponse.json({
              success:true,
              data:order
          },{
              status:200
          })
          
      } catch (error) {
          return NextResponse.json({
              success: false,
              error: error.message
          }, {
              status: 501,
          });
            
      }
  }


const validateProduct = (products) => {
    return (
        products &&
        products.productId &&
        products.productId.trim() !== '' &&
      products.quantity &&
      products.quantity.trim() !== '' &&
      products.total &&
      products.total.trim() !== ''
    );
  };


const validatePaymentInfo = (paymentInfo) => {
    return (
      paymentInfo &&
      paymentInfo.amount &&
      paymentInfo.mode 
    );
  };


const validateAddress = (address) => {
    return (
      address &&
      address.street &&
      address.city &&
      address.state &&
      address.postalCode &&
      address.country 
    );
  };


// const validateReturnInfo = (returnInfo) => {
//     return (
//       returnInfo &&
//       returnInfo.reason &&
//       returnInfo.reason.trim() !== '' &&
//       returnInfo.returnRequested !== undefined &&
//       returnInfo.returnProcessed !== undefined
//     );
//   };
  