import type { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PostPage = ({ frontMatter, content }: any) => {
  if (!frontMatter) {
    return <h1>記事が見つかりません</h1>;
  }

  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <p>{content}</p>
    </div>
  );
};

//全ての投稿のパスを生成
export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("getPosts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,//生成するページのパスを指定
    fallback: false,//404 を表示する場合は false
  };
};

//指定された slug の記事を取得
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join("getPosts", `${params?.slug}.md`);
  if (!fs.existsSync(filePath)) {
    return { notFound: true }; //404を返す
  }

  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      content,
    },
  };
};

export default PostPage;