import getPosts from "@/services/getPosts";
import Link from "next/link";

const HomePage = () => {
  const posts = getPosts();

  return (
    <div className="flex flex-col space-y-2">
      <h1>My Amazing Posts</h1>
      {posts.map((post) => (
        <div key={post.slug} className="flex flex-col">
          <Link href={post.slug}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </Link>
          <section>
            <p>{post.description}</p>
          </section>
          <hr className="m-8"></hr>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
