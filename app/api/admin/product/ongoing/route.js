import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export const dynamic='force-dynamic'


export async function GET(request){
    try {
        const order = await prisma.order.findMany({
            where:{
                shippingStatus:"SHIPPED"
            },
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




