import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  const data = { message: `Hello ${name}！` };
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return NextResponse.json(data);
}
