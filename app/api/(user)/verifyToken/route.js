import { verifyresetLinkToken } from "@/utils/jwt";

import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        
        const url = new URL(request.nextUrl.href);
        const token = url.searchParams.get('token');

        const isValid= await verifyresetLinkToken(token);
        
        

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

