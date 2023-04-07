import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/prisma/prisma";

export async function GET(request: Request, response: Response) {
  try {
    const result = await prisma.post.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response("Unable to retrieve posts :(", { status: 500 });
  }
}
