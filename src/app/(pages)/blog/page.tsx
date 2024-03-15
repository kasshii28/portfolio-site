import Image from "next/image";
import { getAllPosts } from "../../../lib/notion/notion";
import Link from "next/link";

export const revalidate = 86400;

export default async function Home() {
  const postsProperties = await getAllPosts();

  return (
    <div className="pt-20">
      <h1
        className="
            flex justify-center 
            items-center lg:text-4xl
            sm:text-3xl text-2xl font-medium 
            title-font py-16 px-0
            text-gray-900 font-sans"
      >
        Blog
      </h1>
      <main className="flex flex-col items-center justify-center p-4 lg:w-4/6 mx-auto">
        <div className="grid gap-10 p-3 md:p-10 md:grid-cols-2 lg:grid-cols-3">
          {postsProperties.map((post, index) => (
            <Link
              href={`/blog/${post.id}`}
              key={index}
              className="border rounded-lg p-10 shadow-lg transition-shadow hover:shadow-xl"
            >
              <h2 className="text-sm  sm:text-md  md:text-lg font-semibold mb-2">
                {post.title}
              </h2>
              <p className="mb-2 text-gray-600">{post.date}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {post.types.map((type, typeIndex) => (
                    <span
                      key={typeIndex}
                      className="mr-2 bg-gray-800 px-2 py-1 rounded-2xl text-xs hidden sm:block text-white"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                {post.files.map((file, fileIndex) => (
                  <Image
                    key={fileIndex}
                    src={file}
                    alt="Post image"
                    width={960}
                    height={540}
                    className="w-full mb-2"
                  />
                ))}
              </div>
              <p>author: {post.author}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
