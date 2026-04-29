import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API from "../../api";

export default function SingleBlog() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await API.get(
                    `/blogs/${slug}`
                );
                setBlog(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchBlog();
    }, [slug]);

    if (!blog) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto py-16 px-4">

            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[400px] object-cover rounded-xl mb-6"
            />

            <h1 className="text-3xl font-bold mb-4">
                {blog.title}
            </h1>

            <p className="text-gray-500 mb-6">
                {new Date(blog.createdAt).toDateString()}
            </p>

            <p className="text-gray-700 leading-8 whitespace-pre-line">
                {blog.content}
            </p>

        </div>
    );
}