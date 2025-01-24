import React from "react";

// Dynamic title and description
export async function generateMetadata({ params }) {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return {
        title: post.title,
        description: post.body,
    };
}

// Dynamic page
const blogDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return (
        <>
            <div className="container mx-auto bg-gray-100 p-4">
                <h1 className="text-4xl font-bold text-center mb-8">
                    {post.title}
                </h1>
                <p className="text-lg text-center">{post.body}</p>
            </div>
        </>
    );
};

export default blogDetailsPage;
