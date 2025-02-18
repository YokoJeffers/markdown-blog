import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), "posts"); // `posts/` フォルダのパスを指定

  if (!fs.existsSync(postsDirectory)) {
    console.warn("Warning: 'posts' directory not found.");
    return [];
  }

  const postFiles = fs.readdirSync(postsDirectory);

  const posts = postFiles.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // gray-matter でメタデータを解析
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""), // ファイル名をスラッグとして使用
      title: data.title || "No Title",
      date: data.date || "No Date",
      content, // 記事の本文
    };
  });

  return posts;
};

export default getPosts;
