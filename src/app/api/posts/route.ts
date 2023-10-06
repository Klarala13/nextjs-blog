import getPosts from "@/services/getPosts";

export async function GET(request: Request, response: Response) {
  const posts = getPosts();

  return Response.json(posts);
}
