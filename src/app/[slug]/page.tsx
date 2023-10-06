import getPost from "@/services/getPost";
import getPosts from "@/services/getPosts";
import MarkdownPreview from "@/components/markdownPreview";

const PostPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const post = getPost(slug);

  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-xl font-semibold">{post.title}</h1>
      <h2>{post.category}</h2>
      <p className="font-semibold">
        {post.author}: {post.date}
      </p>
      <MarkdownPreview source={post.content} />
    </div>
  );
};

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => {
    return { slug: post.slug };
  });
}

export default PostPage;
