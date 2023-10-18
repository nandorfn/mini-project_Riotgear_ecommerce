import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const apikey = process.env.GEO_API_KEY;
  if (apikey) {
    const res = await fetch(`https://api.countrystatecity.in/v1/countries${body.query}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSCAPI-KEY': apikey
      }
    })
    const data = await res.json()
    return NextResponse.json({data,  status: 200 })
  }
}