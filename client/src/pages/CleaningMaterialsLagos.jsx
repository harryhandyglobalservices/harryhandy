import React from "react";

export default function CleaningMaterialsLagos() {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    Top 5 Best Places to Buy Cleaning Materials in Lagos
                </h1>

                <p className="text-sm text-gray-500 mb-6">
                    By <span className="font-semibold">Michael Ezeadichie</span> • March 31, 2026
                </p>

                <p className="text-gray-700 mb-6">
                    Maintaining a clean home or workspace in Lagos requires access to quality cleaning materials.
                    Whether you are a homeowner, a business owner, or a professional cleaning service provider,
                    knowing where to buy reliable supplies can save you time, money, and stress.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Top 5 Best Places to Buy Cleaning Materials in Lagos
                </h2>

                <div className="space-y-6">
                    {[
                        {
                            title: "1. Local Markets (Balogun & Mile 12)",
                            desc: "Affordable and great for bulk buying. You can find brooms, detergents, buckets, and more at cheaper prices.",
                        },
                        {
                            title: "2. Supermarkets (Shoprite, Spar, Ebeano)",
                            desc: "Offer quality and branded products in a clean and organized environment.",
                        },
                        {
                            title: "3. Cleaning Supply Stores",
                            desc: "Best for professional-grade cleaning tools and industrial chemicals.",
                        },
                        {
                            title: "4. Online Stores (Jumia & Konga)",
                            desc: "Convenient shopping with home delivery and the ability to compare prices easily.",
                        },
                        {
                            title: "5. Wholesale Distributors",
                            desc: "Ideal for bulk buyers and cleaning businesses looking for cost-effective supplies.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-700">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">
                    Tips for Buying Cleaning Materials in Lagos
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    <li>Compare prices before buying</li>
                    <li>Check product quality and authenticity</li>
                    <li>Buy in bulk to save money</li>
                    <li>Choose the right tools for specific cleaning tasks</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    Conclusion
                </h2>
                <p className="text-gray-700 mb-6">
                    Finding the right place to buy cleaning materials in Lagos can make a big difference in your cleaning routine.
                    Whether you prefer local markets for affordability or online stores for convenience, there are plenty of options to meet your needs.
                </p>

                <div className="border-t pt-4 text-sm text-gray-500 text-center">
                    © 2026 | Written by Michael Ezeadichie
                </div>
            </div>
        </div>
    );
}
