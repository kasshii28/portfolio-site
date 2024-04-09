import { NextResponse } from "next/server";

export async function GET() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/skillLists`,{
    cache: "no-store",
  });
  const skillData = await res.json();
  return NextResponse.json(skillData);
}
