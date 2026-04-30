import React, { useState } from "react";
import staff1 from '../assets/staff1.png'
import { IoIosLock } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import API from "../../api";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await API.post(
                "/admin/login",
                {
                    username,
                    password,
                }
            );

            const data = res.data;

            if (data.token) {
                localStorage.setItem("adminToken", data.token);
                navigate("/admin");
            } else {
                alert("Invalid login");
            }
        } catch (err) {
            console.log(err.response?.data || err.message);
            alert("Login failed");
        }
    };
    return (
        <div
            className="h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${staff1})` }}
        >
            {/* Overlay */}
            <div className="absolute w-full min-h-screen bg-black/70"></div>

            {/* Glass Card */}
            <div className="relative z-10 w-[350px] md:w-[500px] backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-8 shadow-xl">

                {/* Title */}
                <h2 className="text-3xl font-semibold text-white text-center mb-6">
                    Administration
                </h2>

                {/* Username (optional UI only) */}
                <div className="flex items-center bg-white/30 rounded-lg px-3 py-2 mb-4">

                    <CgProfile className="text-white text-xl mr-2" />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        className="bg-transparent outline-none text-white placeholder-white w-full"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                </div>

                {/* Password */}
                <div className="flex items-center bg-white/30 rounded-lg px-3 py-2 mb-4">

                    <IoIosLock className="text-white text-xl mr-2" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-transparent outline-none text-white placeholder-white w-full"
                    />
                </div>

                {/* Options */}
                <div className="flex justify-between text-sm text-white mb-4">
                    <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <span className="cursor-pointer hover:underline">
                        Forgot password
                    </span>
                </div>

                {/* Button */}
                <button
                    onClick={handleLogin}
                    className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
                >
                    Login
                </button>
            </div>
        </div>
    );
}