import { verifyServerToken } from "@/server/helpers";
import { connect, disconnect } from "@/server/helpers/db";
import { getUser, verifyUser } from "@/server/helpers/user";
import bcrypt from "bcrypt";

export async function PUT(req: Request) {
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
      const { prevPassword, password } = (await req.json()) as {
        prevPassword: string;
        password: string;
      };
      const isPasswordCorrect = await verifyUser(user.userName, prevPassword);
      console.log(!!isPasswordCorrect);
      if (!isPasswordCorrect) {
        return new Response("usuario o contraseña incorrecta", {
          status: 401,
        });
      } else {
        await connect();
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        user.save();
        await disconnect();
        return new Response("Contraseña cambiada con éxito", {
          status: 200,
        });
      }
    }
  }
  return new Response("usuario o contraseña incorrecta", {
    status: 401,
  });
}
