// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { UserType } from "@/interfaces/user";
import { links } from "@/components/admin/Menu/data";

const secret = process.env.SECRET || "";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log("middleware running");
  const isAdminApi = request.url.includes("/api/admin");
  const isLogin = request.url.includes("/login");
  // const auth = request.cookies.get("auth");
  const auth = request.cookies.get("auth");
  try {
    const tokenUser = await verifyServerToken(auth?.value || "");
    if (isAdminApi) {
      if (!tokenUser) return NextResponse.error();
      return NextResponse.next();
    }
    if (isLogin) {
      if (!tokenUser) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    }
    if (!tokenUser) {
      request.cookies.delete("auth");
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (request.nextUrl.pathname === "/admin/agenda")
      return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/api/admin/:path*", "/admin/:path*", "/login"],
};

async function verifyServerToken(
  token: string
): Promise<{ userId: string; role: UserType } | null> {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret)
    );
    return payload as { userId: string; role: UserType };
  } catch (error) {
    console.log(error);
    return null;
  }
}
