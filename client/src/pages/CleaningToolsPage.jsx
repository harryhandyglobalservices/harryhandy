import React from "react";

export default function CleaningToolsPage() {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    Top 7 Cleaning Tools for Cleaning a New House in Nigeria
                </h1>

                <p className="text-sm text-gray-500 mb-6">
                    By <span className="font-semibold">Lola Adeyemi</span>
                </p>

                <p className="text-gray-700 mb-6">
                    Moving into a new home is exciting, but before settling in, proper cleaning is essential.
                    Whether you just rented or bought a house in Nigeria, having the right cleaning tools
                    will save time, reduce stress, and ensure your new space is hygienic and comfortable.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    Why You Need the Right Cleaning Tools
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    <li>Dust from construction or previous occupants</li>
                    <li>Dirt trapped in corners</li>
                    <li>Bathroom and kitchen stains</li>
                </ul>

                <p className="text-gray-700 mb-6">
                    Using the right tools ensures deep cleaning instead of surface-level results.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Top 7 Cleaning Tools You Must Have
                </h2>

                <div className="space-y-6">
                    {[
                        {
                            title: "1. Broom and Dustpan",
                            desc: "Essential for sweeping dust and debris before mopping. This is the first step in any cleaning process.",
                        },
                        {
                            title: "2. Mop and Bucket",
                            desc: "Perfect for cleaning tiled floors, removing stains, and giving your home a fresh look.",
                        },
                        {
                            title: "3. Scrubbing Brush",
                            desc: "Ideal for bathrooms, tiles, and stubborn stains that require deeper cleaning.",
                        },
                        {
                            title: "4. Microfiber Cloths",
                            desc: "Great for dusting and wiping surfaces without scratching. Reusable and very effective.",
                        },
                        {
                            title: "5. Sponges",
                            desc: "Useful for dishes, countertops, and light cleaning tasks around the house.",
                        },
                        {
                            title: "6. Toilet Brush",
                            desc: "Necessary for maintaining bathroom hygiene and removing toilet stains.",
                        },
                        {
                            title: "7. Vacuum Cleaner (Optional)",
                            desc: "Helps clean carpets, rugs, and hard-to-reach dust quickly and efficiently.",
                        },
                    ].map((tool, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {tool.title}
                            </h3>
                            <p className="text-gray-700">{tool.desc}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">
                    Bonus Tips
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    <li>Clean from top to bottom</li>
                    <li>Use separate tools for kitchen and bathroom</li>
                    <li>Wear gloves for protection</li>
                    <li>Focus on high-touch areas</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    Conclusion
                </h2>
                <p className="text-gray-700 mb-6">
                    With the right cleaning tools, you can easily transform your new house into a clean,
                    safe, and comfortable home. Investing in these tools will make both move-in cleaning
                    and everyday maintenance much easier.
                </p>

                <div className="border-t pt-4 text-sm text-gray-500 text-center">
                    © 2026 | Written by Lola Adeyemi
                </div>
            </div>
        </div>
    );
}
