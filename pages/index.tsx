import Link from "next/link";
import { posts } from "./data/posts";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Image src='/images.jpg' alt='car' width={800} height={400} style={{ width: '100%', height: 'auto', borderRadius: '12px'}} /> */}
      {/* <div className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center"> */}
      <div className="h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold">Welcome to Devblogs</h1>
          <p className="text-lg mt-4"> A private React/Next.js tutorial</p>
        </div>
        
      </div>

      <div className="bg-red-500 text-white p-4 rounded">Tailwind check. Must be red</div>


      {/* <div className="h-screen bg-blue-600 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Tailwind is working now!</h1>
      </div> */}
     

      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>
            <Link href={`/posts/${posts.id}`}>
              <strong>{posts.title}</strong>
            </Link>
            <p>{posts.summary}</p>
          </li>
        ))}
      </ul>
    </>
  );
}