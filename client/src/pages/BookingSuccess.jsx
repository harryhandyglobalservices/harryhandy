import { useParams } from "react-router-dom";
import React from "react";

export default function BookingSuccess() {
    const { reference } = useParams();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
            <div className="bg-white p-8 rounded-xl shadow text-center max-w-md">
                <h1 className="text-3xl font-bold text-green-600 mb-4">
                    ✅ Payment Successful
                </h1>

                <p className="text-gray-600 mb-2">
                    Your booking has been confirmed.
                </p>

                <p className="text-xl font-semibold text-gray-800">
                    Booking ID: <span className="text-blue-600">{reference}</span>
                </p>

                <p className="text-sm text-gray-500">
                    Our team will contact you shortly.
                </p>
            </div>
        </div>
    );
}