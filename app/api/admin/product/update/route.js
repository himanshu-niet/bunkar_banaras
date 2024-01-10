import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function PUT(request){
    try {
        const {
            shippingStatus
        }=await request.json();

        const url = new URL(request.nextUrl.href);
        const id = url.searchParams.get('id');

    
        if (!shippingStatus) {
            return NextResponse.json({
                success: false,
                error:"Bad Request"
            }, {
                status: 400,
            });
        }
    
          const updateProduct = await prisma.order.update({
            where: {
              id
            },
            data: {
                shippingStatus
                }
          })
    
        return NextResponse.json({
            success: true,
            data: updateProduct
        }, {
            status: 201,
        });
    
       
    } catch (error) {
        console.log(error)
    return NextResponse.json({
        success: false,
        error: error.message
    }, {
        status: 501,
    });}}


