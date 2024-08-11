import { NextResponse } from "next/server";
import data from '/data.json';

export async function GET(request, context) {
    const statement = data.find(item => item.id == context.params.id);


    return NextResponse.json(statement)
}