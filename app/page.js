import Link from "next/link";

const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await res.json();

export const metadata = {
    title: "Home",
    description: "A list of blog posts",
};

export default function Home() {
    return (
        <div className="container mx-auto bg-gray-100 p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
            <ul className="space-y-4">
                {posts.slice(0, 10).map((post, index) => (
                    <li key={post.id} className="bg-white p-4 rounded shadow">
                        <span className="font-semibold">{index + 1}. </span>
                        <Link
                            className="text-blue-500 hover:underline"
                            href={`/blog/${post.id}`}
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
