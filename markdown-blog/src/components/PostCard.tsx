import Link from "next/link";

type Post = {
  slug: string;
  frontMatter: {
    title: string;
    description: string;
  };
};

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  if (!post) return <h2>記事がありません</h2>;

  return (
    <div>
      <Link href={`/post/${post.slug}`} passHref>
        <h2 style={{ cursor: "pointer", color: "blue" }}>
          {post.frontMatter.title}
        </h2>
      </Link>
      <p>{post.frontMatter.description}</p>
    </div>
  );
};

export default PostCard;
