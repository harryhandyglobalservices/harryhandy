import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API from "../../api";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate(); 

    const query = searchParams.get("q") || "";
    const [blogs, setBlogs] = useState([]);

    const services = [
        "Housekeeping",
        "Fumigation",
        "Deep Cleaning",
        "Post Construction Cleaning",
        "Carpet Cleaning",
    ];

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await API.get("/blogs");
                setBlogs(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchBlogs();
    }, []);

    const filteredBlogs = blogs.filter((b) =>
        b.title?.toLowerCase().includes(query.toLowerCase()) ||
        b.content?.toLowerCase().includes(query.toLowerCase())
    );

    const filteredServices = services.filter((s) =>
        s.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-4">
                Results for "{query}"
            </h1>

            {/* SERVICES */}
            <h2 className="text-lg font-semibold mb-2">Services</h2>
            {filteredServices.length > 0 ? (
                filteredServices.map((s, i) => (
                    <div
                        key={i}
                        onClick={() => navigate(`/services/${encodeURIComponent(s)}`)}
                        className="p-2 border-b cursor-pointer hover:bg-gray-100"
                    >
                        {s}
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No services found</p>
            )}

            {/* BLOGS */}
            <h2 className="text-lg font-semibold mt-6 mb-2">Blogs</h2>
            {filteredBlogs.length > 0 ? (
                filteredBlogs.map((b) => (
                    <div
                        key={b._id}
                        onClick={() => navigate(`/blog/${b.slug}`)}
                        className="p-3 border-b cursor-pointer hover:bg-gray-100 transition"
                    >
                        <h3 className="font-bold">{b.title}</h3>
                        <p className="text-sm text-gray-500">
                            {b.content?.slice(0, 100)}...
                        </p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No blogs found</p>
            )}

        </div>
    );
}