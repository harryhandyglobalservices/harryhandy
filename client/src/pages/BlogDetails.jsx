import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API from "../../api";

export default function BlogDetails() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const res = await API.get(`/blogs/${slug}`)
            setBlog(res.data);
        };

        fetchBlog();
    }, [id]);

    if (!blog) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="mt-4">{blog.content}</p>
        </div>
    );
}