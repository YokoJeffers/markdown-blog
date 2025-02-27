//import Image from "next/image";
import Layout from "../components/Layout";
import "./globals.css";
import getPosts from "../../lib/getPosts";
import PostCard from "@/components/PostCard";


export default function Home() {
  const posts = getPosts(); //記事データ取得
  console.log(posts);

  return (
    <Layout>
      <div className="my-8">
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
