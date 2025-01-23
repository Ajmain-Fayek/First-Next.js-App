import React from "react";
import Head from "next/head";

const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.body} />
      </Head>
      <main className="min-h-screen bg-gray-100 p-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {post.title}
          </h1>
          <p className="text-lg text-center">{post.body}</p>
        </div>
      </main>
    </>
  );
};

export default page;
