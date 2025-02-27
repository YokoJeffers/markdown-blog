import Link from "next/link";

const PostCard = ({ post }: { post: { slug: string; frontMatter: { title: string; description: string } } }) => {
  console.log("Post data:", post); //追加してデータ確認

  if (!post) return <h2>記事がありません</h2>;

  return (
    <div>
      <Link href={`/post/${post.slug}`} passHref>
        <h2 style={{ cursor: "pointer", color: "blue" }}>
          <a>
            {post.frontMatter.title}
          </a>
        </h2>
      </Link>
      <p>{post.frontMatter.description}</p>
    </div>
  );
};

export default PostCard;
