import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // Mock implementation
  return NextResponse.redirect(new URL("/dashboard", request.url));
}