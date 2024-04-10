import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_URL}/skillLists`);

  const skillData = await res.json();
  return NextResponse.json(skillData);
}
