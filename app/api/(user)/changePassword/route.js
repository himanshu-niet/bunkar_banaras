import { verifyresetLinkToken } from "@/utils/jwt";
const bcrypt = require('bcryptjs');

import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        
        const url = new URL(request.nextUrl.href);
        const tkn = url.searchParams.get('token');
        let {password} = await request.json();

     const data = await verifyresetLinkToken(tkn);
     
     let haspassword=bcrypt.hashSync(password, 8)
        
     const updateUser = await prisma.user.update({
        where: {
          id: data.payload.id,
        },
        data: {
          password:haspassword,
        },
      })

        return NextResponse.json({
            success: true,
            
        },{ status: 201})

    } catch (error) {
      console.log(error)
        return NextResponse.json({
            success: false,
            error: error.message
        }, {status: 501});
    }
}

