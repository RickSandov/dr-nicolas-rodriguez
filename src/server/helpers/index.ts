import { UserType } from "@/interfaces/user";
import { jwtVerify } from "jose";

export * from "./contact";

const secret = process.env.SECRET || "";

export async function verifyServerToken(
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
