import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json({ route: "get"})
}


export async function POST() {

    return NextResponse.json({ route: "post"})
}
