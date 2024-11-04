import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authtoken: string = request.headers.get("authToken") as string;
  if (!authtoken) {
    return NextResponse.json(
      {
        message: "not token provided ,access denied, message from middleware",
      },
      { status: 401 } //Unauthorized
    );
  }
}

export const config = {
  matcher: ["/api/users/profile/:path*"],
};
