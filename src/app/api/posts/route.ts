import getPosts from "@/services/getPosts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  const posts = await getPosts();
  console.log("posts", posts);

  return NextResponse.json(posts);
}
