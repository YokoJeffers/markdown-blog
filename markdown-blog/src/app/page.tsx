//import Image from "next/image";
import Layout from "../components/Layout";
import "./globals.css";
import getPosts from "../../lib/getPosts";


export default function Home() {
  const posts = getPosts(); //記事データ取得

  return (
    <Layout>
      <div className="my-8">
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="mt-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">{post.date}</p>
              <p>{post.content.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
