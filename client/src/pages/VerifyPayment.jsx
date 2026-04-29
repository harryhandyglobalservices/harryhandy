import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function VerifyPayment() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
   const API_URL = import.meta.env.VITE_API_URL;
    const reference = searchParams.get("reference");

    useEffect(() => {
        if (!reference) {
            alert("No payment reference found");
            navigate("/");
            return;
        }

        const verify = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/verify/${reference}`
                );

                const data = await res.json();
                console.log("VERIFY RESPONSE:", data);

                if (data?.data?.status === "success") {
                    navigate(`/booking-success/${reference}`);
                } else {
                    alert("Payment verification failed");
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };


        if (reference) verify();
    }, [reference, navigate]);

    return (
        <div className="h-screen flex items-center justify-center">
            <p className="text-xl font-semibold">
                {loading ? "Verifying payment..." : "Processing..."}
            </p>
        </div>
    );
}