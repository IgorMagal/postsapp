import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/prisma/prisma";

export async function POST(request: Request, response: Response) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response("Please log in to make a new post.", { status: 401 });
  }
  const primaUser = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });

  const { comment } = await request.json();
  console.log(comment);

  if (!comment) {
    return new Response("Please provide content for your post.", {
      status: 403,
    });
  }
  if (comment.length > 500) {
    return new Response("Your post is too long.", { status: 403 });
  }

  try {
    const result = await prisma.post.create({
      data: {
        title: comment,
        userId: primaUser?.id as string,
      },
    });
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response("Could not complete posting :(", { status: 500 });
  }
}
