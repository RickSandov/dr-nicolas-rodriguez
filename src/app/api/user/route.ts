import { IUser, UserType } from "@/interfaces/user";
import { verifyServerToken } from "@/server/helpers";
import { createUser, getUser } from "@/server/helpers/user";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = (await req.json()) as IUser;
  console.log({ body });
  const newUser = await createUser(body);
  return new Response("usuario creado con exito", {
    status: 200,
  });
}

export async function GET(req: Request) {
  const cookies = req.headers.get("cookie") || "";
  const regex = /auth=([^;]+)/;
  const match = cookies.match(regex);
  if (match) {
    const token = await verifyServerToken(match[1].replace("auth=", ""));
    if (!token) {
      return new Response("token invalido", {
        status: 401,
      });
    }
    const user = await getUser(token.userId);
    if (user) {
      return new Response(
        JSON.stringify({
          userName: user.userName,
          displayName: user.displayName,
          role: user.role,
        }),
        {
          status: 200,
        }
      );
    }
  }
  return new Response("usuario creado con exito", {
    status: 200,
  });
}
