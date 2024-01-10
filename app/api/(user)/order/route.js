import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic='force-dynamic'

export async function POST(request){
try{

    const { userId, products, total,  address }=await request.json();
    if (!userId, !validateProduct(products), !total, !validateAddress(address)) {
        return NextResponse.json({
            success: false,
            error:"Bad Request"
        }, {
            status: 400,
        });
    }
    
    const order = await prisma.order.create({
        data: {
          userId,
          total,
          address: {
            create: address,
          },
          orderItem: {
            createMany: {
              data: products.map((product) => ({
                productId: product.productId,
                quantity: product.quantity,
                total: product.total,
                title:product.title,
                desc:product.desc,
                price:product.price,
                discount:product.discount,
                category:product.category,
                subCategory:product.subCategory,
                color:product.color,
                stock:product.stock,
                images:product.images  
              })),
            },
          },
          shippingStatus:"PENDING",
        },
        include: {
          address:true,
          returnInfo:true,
          orderItem:true
          }
      });


      return NextResponse.json({
        success: true,
        data: order
    },
     {
        status: 201,
    })

} catch (error) {
  console.log(error)

    return NextResponse.json({
        success: false,
        error: error.message
    }, {
        status: 501,
    });
      }}


      export async function GET(request){
        try {
          const url = new URL(request.nextUrl.href);
          const userId = url.searchParams.get('id');
    
          const order = await prisma.order.findMany({
            
              where: {
                userId: userId,
              },
              orderBy: {
                createdAt: 'desc',
              }, 
              include: {
                address:true,
                returnInfo:true,
                orderItem:true
                }
            });

                return NextResponse.json({
                    success:true,
                    data:order
                },{
                    status:200
                })
        } catch (error) {
          console.log(error)
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
  