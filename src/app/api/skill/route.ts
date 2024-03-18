import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`http://localhost:3001/skillLists`,{
    cache: "no-store",
  });
  const skillData = await res.json();
  return NextResponse.json(skillData);
}
