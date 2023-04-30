import { NextResponse } from 'next/server';
 
export async function GET() {
  
  const data = { name: "Hello"};
 
  return NextResponse.json({ data });
}
