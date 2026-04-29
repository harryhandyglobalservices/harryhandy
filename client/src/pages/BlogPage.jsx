import React, { useState, useEffect } from "react";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import API from "../../api";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await API.get("/blogs");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await API.get("/categories");
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  /* ================= FILTER ================= */
  const filteredPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.content?.toLowerCase().includes(search.toLowerCase())
  );

  /* ================= PAGINATION LOGIC ================= */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = filteredPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  return (
    <section className="w-full bg-gray-100 py-16">
      {/* SEO */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Shiny Clean Blog",
            url: "https://yourwebsite.com/blog",
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {/* BLOG POSTS */}
        <div className="lg:col-span-2 space-y-16">
          {currentPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post._id}
              className="block bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[350px] object-cover"
                />
              )}

              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {post.title}
                </h2>

                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <FaUserCircle />
                  <p className="text-sm">
                    Written by{" "}
                    <span className="text-blue-500 font-medium">
                      {post.author || "Admin"}
                    </span>{" "}
                    - {new Date(post.createdAt).toDateString()}
                  </p>
                </div>

                <p className="text-gray-600 mb-4">
                  {post.content?.slice(0, 120)}...
                </p>

                <span className="text-blue-500 font-medium">
                  Read More →
                </span>
              </div>
            </Link>
          ))}

          {/* ================= PAGINATION UI ================= */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {/* PREVIOUS */}
            <button
              onClick={prevPage}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            >
              ←
            </button>

            {/* PAGE NUMBERS */}
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-full 
                  ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "text-blue-600 hover:bg-blue-100"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            {/* NEXT */}
            <button
              onClick={nextPage}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            >
              →
            </button>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-10">
          {/* SEARCH */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Search</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1); // ✅ reset page on search
                }}
                className="flex-1 border px-3 py-2 outline-none"
              />
              <button className="bg-blue-400 text-white px-4">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* RECENT POSTS */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>

            <div className="space-y-4">
              {posts.slice(0, 5).map((item, i) => (
                <Link
                  to={`/blog/${item.slug}`}
                  key={i}
                  className="flex gap-3 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <p className="text-sm text-gray-700 hover:text-blue-500">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-4">Categories</h3>

            <div className="space-y-2">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className="flex justify-between text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                  <span>{cat.name}</span>
                  <span>{cat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}