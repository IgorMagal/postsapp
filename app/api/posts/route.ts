import prisma from "../../../prisma/prisma";

export async function GET() {
  try {
    const result = await prisma.post.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log(result);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response("Unable to retrieve posts :(", { status: 500 });
  }
}
