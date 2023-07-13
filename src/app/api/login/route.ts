import { createToken, verifyUser } from "@/server/helpers/user";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = (await req.json()) as { userName: string; password: string };
  const { userName, password } = body;
  const user = await verifyUser(userName, password);
  if (!user) {
    return new Response(JSON.stringify("usuario o contraseña incorrecta"), {
      status: 401,
    });
  }
  const token = createToken(user._id, user.role);
  return new Response(
    JSON.stringify({
      userName: user.userName,
      displayName: user.displayName,
      role: user.role,
    }),
    {
      status: 200,
      headers: {
        "Set-Cookie": `auth=${token}; Max-Age=${60 * 60 * 24 * 30}; Path=/`,
      },
    }
  );
}
