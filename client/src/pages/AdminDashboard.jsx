import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaClipboardList, FaNewspaper, FaUsers, FaEnvelope } from "react-icons/fa";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip,
    ResponsiveContainer, PieChart, Pie, Cell,
    AreaChart, Area
} from "recharts";
import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import API from "../../api";

export default function AdminDashboard() {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-");
    };

    const [blogs, setBlogs] = useState([]);
    const [staff, setStaff] = useState([]);
    const [contacts, setContacts] = useState([]);

    const [form, setForm] = useState({
        name: "",
        role: "",
        title: "",
        content: "",
        author: "",
        date: "",
        category: ""
    });

    const [preview, setPreview] = useState("");
    const [image, setImage] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [visitors, setVisitors] = useState(0);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const token = localStorage.getItem("adminToken");

                const res = await API.get(
                    "bookings",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setBookings(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchBookings();
    }, []);


    const updateStatus = async (id, status) => {
        try {
            const token = localStorage.getItem("adminToken");

            const res = await API.put(
                `/bookings/${id}`,
                { status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setBookings((prev) =>
                prev.map((b) => (b._id === id ? res.data : b))
            );

        } catch (err) {
            console.log(err);
            alert("Failed to update status");
        }
    };

    /* ================= SAVE ================= */

    useEffect(() => {
        localStorage.setItem("staff", JSON.stringify(staff));
    }, [staff]);


    /* ================= IMAGE ================= */
    const handleImage = (e) => {
        const file = e.target.files[0];
        setImage(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    /* ================= MENU ================= */
    const menuItems = [
        { key: "dashboard", label: "Dashboard", icon: <FaClipboardList /> },
        { key: "bookings", label: "Bookings", icon: <FaClipboardList /> },

        { key: "addBlog", label: "Add Blog", icon: <FaNewspaper /> },
        { key: "blogList", label: "Blog List", icon: <FaNewspaper /> },

        { key: "addStaff", label: "Add Staff", icon: <FaUsers /> },
        { key: "staffList", label: "Staff List", icon: <FaUsers /> },

        { key: "contacts", label: "Messages", icon: <FaEnvelope /> },
    ];
    const [stats, setStats] = useState({
        completed: 0,
        pending: 0,
        confirmed: 0
    });

    const [bookingsSearch, setBookingsSearch] = useState("");

    // ================= FILTER =================
    const filteredUsers = bookings.filter(user =>
        user.name?.toLowerCase().includes(bookingsSearch.toLowerCase()) ||
        user.service?.toLowerCase().includes(bookingsSearch.toLowerCase()) ||
        user.bookingId?.toLowerCase().includes(bookingsSearch.toLowerCase())
    );


    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await API.get("/booking-stats");
                setStats(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchStats();
    }, []);



    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await API.get(
                    "/stats/monthly"
                );
                setChartData(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchStats();
    }, []);

    /* ================= ACTIONS ================= */
    const addBlog = async () => {
        try {
            const token = localStorage.getItem("adminToken");

            const slug = generateSlug(form.title); // ✅ ADD THIS

            const formData = new FormData();
            formData.append("title", form.title);
            formData.append("content", form.content);
            formData.append("author", form.author);
            formData.append("date", form.date);
            formData.append("category", form.category);
            formData.append("slug", slug); // ✅ SEND TO BACKEND
            formData.append("image", image);

            const res = await API.post(
                "/blogs",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setBlogs((prev) => [res.data, ...prev]);
            resetForm();

        } catch (err) {
            console.log(err);
            alert("Failed to add blog");
        }
    };

    const addStaff = async () => {
        try {
            const token = localStorage.getItem("adminToken");

            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("role", form.role);
            formData.append("image", image);

            const res = await API.post(
                "/staff",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setStaff((prev) => [res.data, ...prev]);
            resetForm();

        } catch (err) {
            console.log(err);
            alert("Failed to add staff");
        }
    };

    const resetForm = () => {
        setForm({ title: "", content: "", name: "", role: "" });
        setPreview("");
        setImage(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const res = await API.get("/staff");
                setStaff(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchStaff();
    }, []);

    useEffect(() => {
        const fetchVisitors = async () => {
            try {
                const res = await API.get("/visitors");
                setVisitors(res.data.count);
            } catch (err) {
                console.log(err);
            }
        };

        fetchVisitors();
    }, []);


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


    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const token = localStorage.getItem("adminToken");

                const res = await API.get(
                    "/contacts",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setContacts(res.data);

            } catch (err) {
                console.log(err);
            }
        };

        fetchContacts();
    }, []);


    const deleteMessage = async (id) => {
        try {
            const token = localStorage.getItem("adminToken");

            await API.delete(`/contacts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // remove from UI instantly
            setContacts((prev) => prev.filter((msg) => msg._id !== id));

        } catch (err) {
            console.log(err);
            alert("Failed to delete message");
        }
    };


    const deleteBlog = async (id) => {
        try {
            const token = localStorage.getItem("adminToken");

            await API.delete(`/blogs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // remove instantly from UI
            setBlogs((prev) => prev.filter((blog) => blog._id !== id));

        } catch (err) {
            console.log(err);
            alert("Failed to delete blog");
        }
    };


    const deleteStaff = async (id) => {
        try {
            const token = localStorage.getItem("adminToken");

            await API.delete(`/staff/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setStaff((prev) => prev.filter((s) => s._id !== id));

        } catch (err) {
            console.log(err);
            alert("Failed to delete staff");
        }
    };

    const [blogSearch, setBlogSearch] = useState("");

    const filteredBlogs = blogs.filter(blog =>
        blog.title?.toLowerCase().includes(blogSearch.toLowerCase()) ||
        blog.author?.toLowerCase().includes(blogSearch.toLowerCase())
    );

    const [staffSearch, setStaffSearch] = useState("");

    const filteredStaff = staff.filter(s =>
        s.name?.toLowerCase().includes(staffSearch.toLowerCase()) ||
        s.role?.toLowerCase().includes(staffSearch.toLowerCase())
    );






    useEffect(() => {
        let timeout;

        const logoutUser = () => {
            localStorage.clear();
            alert("Session expired. You have been logged out.");
            navigate("/");
        };

        const resetTimer = () => {
            clearTimeout(timeout);

            // ⏱️ 10 minutes (change this)
            timeout = setTimeout(logoutUser, 10 * 60 * 1000);
        };

        // Track user activity
        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keydown", resetTimer);
        window.addEventListener("click", resetTimer);
        window.addEventListener("scroll", resetTimer);

        // Start timer initially
        resetTimer();

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keydown", resetTimer);
            window.removeEventListener("click", resetTimer);
            window.removeEventListener("scroll", resetTimer);
        };
    }, [navigate]);




    return (
        <div className="flex h-[70rem] bg-gray-100 ">

            {/* SIDEBAR */}
            <div className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-white pb-46 px-6 flex flex-col z-50 transform transition-transform duration-300
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>

                <button onClick={() => setSidebarOpen(false)} className="md:hidden mb-4">✕</button>

                <div className="flex flex-col -ml-5 items-center gap-2">
                    <img
                        className="w-20 sm:w-28 md:w-30 filter brightness-0 invert"
                        src={logo}
                        alt="logo"
                    />
                    <img
                        className="w-20 sm:w-28 md:w-36"
                        src={icon}
                        alt="icon"
                    />
                </div>

                <div className="mt-6 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => {
                                setActiveTab(item.key);
                                setSidebarOpen(false);
                            }}
                            className={`flex items-center gap-2 w-full p-3 rounded-lg ${activeTab === item.key ? "bg-blue-600" : "hover:bg-gray-700"
                                }`}
                        >
                            {item.icon} {item.label}
                        </button>
                    ))}
                </div>

                <button onClick={handleLogout} className="mt-22  bg-red-500 p-3 w-full rounded-lg">
                    Logout
                </button>

            </div>

            {/* OVERLAY */}
            {sidebarOpen && (
                <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/50 md:hidden" />
            )}

            {/* MAIN */}
            <div className="flex-1 p-4 md:p-6 w-full">

                {/* MOBILE HEADER */}
                <div className="flex justify-between items-center mb-4 md:hidden">
                    <button onClick={() => setSidebarOpen(true)} className="bg-black text-white px-3 py-2 rounded">☰</button>
                    <h1 className="font-bold">Admin</h1>
                </div>

                <h1 className="text-2xl font-bold mb-6 capitalize">{activeTab}</h1>

                {/* DASHBOARD */}
                {activeTab === "dashboard" && (
                    <>
                        {/* STATS */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="bg-blue-950 text-white p-6 rounded-xl shadow">
                                <p>Blogs</p>
                                <h2 className="text-2xl font-bold">{blogs.length}</h2>
                            </div>
                            <div className="bg-blue-950 text-white p-6 rounded-xl shadow">
                                <p>Staff</p>
                                <h2 className="text-2xl font-bold">{staff.length}</h2>
                            </div>
                            <div className="bg-blue-950 text-white p-6 rounded-xl shadow">
                                <p>Messages</p>
                                <h2 className="text-2xl font-bold">{contacts.length}</h2>
                            </div>
                            <div className="bg-blue-950 text-white p-6 rounded-xl shadow">
                                <p>Visitors</p>
                                <h2 className="text-2xl font-bold">{visitors}</h2>
                            </div>
                        </div>
                        {/* CHARTS */}
                        <div className="grid lg:grid-cols-3 gap-6 mb-10">

                            {/* BAR CHART */}
                            <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
                                <ResponsiveContainer width="100%" height={220}>
                                    <BarChart data={chartData}>
                                        <XAxis dataKey="name" stroke="#888" />
                                        <YAxis stroke="#888" />
                                        <Tooltip />
                                        <Bar dataKey="bookings" name="Bookings" fill="#3b82f6" radius={[4, 4, 0, 0]} /> {/* BLUE */}
                                        <Bar dataKey="revenue" name="Revenue (₦)" fill="#10b981" radius={[4, 4, 0, 0]} /> {/* GREEN */}

                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* PIE CHART */}
                            <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
                                <ResponsiveContainer width={150} height={150}>
                                    <PieChart>
                                        <Pie
                                            data={[
                                                { name: "Completed", value: stats.completed },
                                                { name: "Pending", value: stats.pending },
                                                { name: "Confirmed", value: stats.confirmed },
                                            ]}
                                            dataKey="value"
                                            innerRadius={40}
                                            outerRadius={60}
                                        >
                                            <Cell fill="#22c55e" />   // Completed (green)
                                            <Cell fill="#f59e0b" />   // Pending (orange)
                                            <Cell fill="#3b82f6" />   // Confirmed (blue)
                                            <Tooltip />
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>

                                <h2 className="text-xl font-bold mt-2">
                                    {bookings.length} Bookings
                                </h2>
                            </div>
                        </div>

                        {/* AREA CHART */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <ResponsiveContainer width="100%" height={200}>
                                <AreaChart data={chartData}>
                                    <XAxis dataKey="name" stroke="#888" />
                                    <YAxis stroke="#888" />
                                    <Tooltip />

                                    <Area
                                        type="monotone"
                                        dataKey="bookings"
                                        stroke="#3b82f6"
                                        fill="#3b82f6"
                                        fillOpacity={0.2}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </>
                )}

                {activeTab === "bookings" && (
                    <div className="bg-white p-6 w-full rounded-xl shadow">

                        <input
                            placeholder="Search users..."
                            value={bookingsSearch}
                            onChange={(e) => setBookingsSearch(e.target.value)}
                            className="border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none p-2 mb-4 w-full rounded-lg"
                        />

                        {bookings.length === 0 ? (
                            <p className="text-gray-500 text-center">No bookings available</p>
                        ) : (


                            <div className="overflow-x-auto">

                                <table className="min-w-[800px] w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-200 text-left">
                                            <th className="p-3">ID</th>
                                            <th className="p-3">Customer</th>
                                            <th className="p-3">Service</th>
                                            <th className="p-3">Date</th>
                                            <th className="p-3">Payment</th>
                                            <th className="p-3">Status</th>
                                            <th className="p-3">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredUsers.map((b) => (
                                            <tr key={b._id} className="border-b">
                                                <td className="p-3">{b.bookingId}</td>
                                                <td className="p-3">{b.name}</td>
                                                <td className="p-3">{b.service}</td>
                                                <td className="p-3">{new Date(b.date).toDateString()}</td>

                                                <td className="p-3">
                                                    {b.paid ? (
                                                        <span className="bg-green-500 text-white px-2 py-1 rounded">
                                                            Paid
                                                        </span>
                                                    ) : (
                                                        <span className="bg-red-500 text-white px-2 py-1 rounded">
                                                            Unpaid
                                                        </span>
                                                    )}
                                                </td>

                                                <td className="p-3">
                                                    <span
                                                        className={`px-2 py-1 text-white rounded text-sm ${b.status === "Completed"
                                                            ? "bg-green-500"
                                                            : b.status === "Confirmed"
                                                                ? "bg-blue-500"
                                                                : "bg-yellow-500"
                                                            }`}
                                                    >
                                                        {b.status || "Pending"}
                                                    </span>
                                                </td>

                                                <td className="p-3 flex items-center space-x-2">
                                                    <button
                                                        onClick={() => updateStatus(b._id, "Confirmed")}
                                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                                    >
                                                        Confirm
                                                    </button>

                                                    <button
                                                        onClick={() => updateStatus(b._id, "Completed")}
                                                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                                                    >
                                                        Complete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        )}
                    </div>
                )}

                {/* BLOGS */}
                {activeTab === "addBlog" && (
                    <div className="bg-white p-6 rounded-xl shadow">

                        <input
                            placeholder="Blog Title"
                            value={form.title}
                            className="border p-2 w-full mb-3"
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                        />

                        <input
                            placeholder="Author Name"
                            value={form.author}
                            className="border p-2 w-full mb-3"
                            onChange={(e) => setForm({ ...form, author: e.target.value })}
                        />

                        <input
                            type="date"
                            value={form.date}
                            className="border p-2 w-full mb-3"
                            onChange={(e) => setForm({ ...form, date: e.target.value })}
                        />

                        <input
                            placeholder="Category"
                            className="border p-2 w-full mb-3"
                            onChange={(e) => setForm({ ...form, category: e.target.value })}
                        />

                        <textarea
                            placeholder="Blog Content"
                            value={form.content}
                            className="border p-2 w-full mb-3"
                            onChange={(e) => setForm({ ...form, content: e.target.value })}
                        />

                        <input type="file" onChange={handleImage} className="mb-3" />

                        {preview && <img src={preview} className="w-40 rounded mb-3" />}

                        <button onClick={addBlog} className="bg-blue-600 text-white px-4 py-2 rounded">
                            Add Blog
                        </button>
                    </div>
                )}


                {activeTab === "blogList" && (
                    <div className="bg-white p-6 rounded-xl shadow">



                        <h2 className="text-xl font-bold mb-4">Blog List</h2>


                        <input
                            placeholder="Search blog..."
                            value={blogSearch}
                            onChange={(e) => setBlogSearch(e.target.value)}
                            className="border p-2 w-full mb-4 rounded"
                        />

                        {filteredBlogs.length === 0 ? (
                            <p>No blogs yet</p>
                        ) : (
                            <div className="space-y-4">
                                {filteredBlogs.map((blog) => (
                                    <div key={blog._id} className="border p-4 rounded flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold">{blog.title}</h3>
                                            <p className="text-sm text-gray-500">{blog.author}</p>
                                        </div>

                                        <button
                                            onClick={() => deleteBlog(blog._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* STAFF */}
                {activeTab === "addStaff" && (
                    <div className="bg-white p-6 rounded-xl shadow">

                        <input
                            placeholder="Name"
                            value={form.name}
                            className="border p-2 w-full mb-3"
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />

                        <input
                            placeholder="Role"
                            value={form.role}
                            className="border p-2 w-full mb-3"
                            onChange={(e) => setForm({ ...form, role: e.target.value })}
                        />

                        <input type="file" onChange={handleImage} />

                        {preview && (
                            <img src={preview} className="w-20 h-20 rounded-full mt-3" />
                        )}

                        <button onClick={addStaff} className="bg-green-600 text-white px-4 py-2 mt-3 rounded">
                            Add Staff
                        </button>
                    </div>
                )}


                {activeTab === "staffList" && (
                    <div className="bg-white p-6 rounded-xl shadow">

                        <h2 className="text-xl font-bold mb-4">Staff List</h2>

                        <input
                            placeholder="Search staff..."
                            value={staffSearch}
                            onChange={(e) => setStaffSearch(e.target.value)}
                            className="border p-2 w-full mb-4 rounded"
                        />

                        {filteredStaff.length === 0 ? (
                            <p>No staff yet</p>
                        ) : (
                            <div className="space-y-4">
                                {filteredStaff.map((s) => (
                                    <div key={s._id} className="flex items-center justify-between border p-4 rounded">

                                        <div className="flex items-center gap-3">
                                            <img
                                                src={s.image}
                                                alt=""
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <h3 className="font-bold">{s.name}</h3>
                                                <p className="text-sm text-gray-500">{s.role}</p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => deleteStaff(s._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === "contacts" && (
                    <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

                        {contacts.length === 0 ? (
                            <p className="text-gray-500 text-center">No messages available</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse bg-white rounded-xl shadow">
                                    <thead>
                                        <tr className="bg-gray-100 text-left text-sm uppercase text-gray-600">
                                            <th className="p-3">Name</th>
                                            <th className="p-3">Email</th>
                                            <th className="p-3">Subject</th>
                                            <th className="p-3">Message</th>
                                            <th className="p-3">Date</th>
                                            <th className="p-3">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {contacts.map((msg) => (
                                            <tr key={msg._id} className="border-b hover:bg-gray-50">
                                                <td className="p-3 font-medium">{msg.name}</td>
                                                <td className="p-3 text-gray-600">{msg.email}</td>
                                                <td className="p-3 text-blue-500">{msg.subject}</td>
                                                <td className="p-3 text-gray-700 max-w-xs truncate">
                                                    {msg.message}
                                                </td>
                                                <td className="p-3 text-gray-400 text-sm">
                                                    {new Date(msg.createdAt).toDateString()}
                                                </td>

                                                <td className="p-3">
                                                    <button
                                                        onClick={() => deleteMessage(msg._id)}
                                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                    </div>
                )}
            </div>
        </div>
    );
}











