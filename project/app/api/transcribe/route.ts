import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Mock implementation
    return NextResponse.json({
      message: "This is a mock implementation. Supabase integration is disabled.",
      status: 200
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}