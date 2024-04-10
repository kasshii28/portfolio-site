import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_URL}/skillLists`,{
    cache: "no-store",
  });

  const skillData = await res.json();
  return NextResponse.json(skillData);
}
