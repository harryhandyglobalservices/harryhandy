import React from "react";

export default function PestControlStrategies() {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    How to Employ Pest Control Strategies in Your Home
                </h1>

                <p className="text-sm text-gray-500 mb-6">
                    By <span className="font-semibold">Michael Ezeadichie</span> • March 31, 2026
                </p>

                <p className="text-gray-700 mb-6">
                    Pest control is essential for maintaining a safe and hygienic home. In Nigeria,
                    common pests like mosquitoes, cockroaches, rodents, and ants can pose serious
                    health risks if not properly managed. Understanding how to apply effective pest
                    control strategies will help protect your home and family.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Effective Pest Control Strategies
                </h2>

                <div className="space-y-6">
                    {[
                        {
                            title: "1. Keep Your Home Clean",
                            desc: "Regular cleaning prevents pests from finding food and shelter. Ensure floors, kitchens, and bathrooms are always clean.",
                        },
                        {
                            title: "2. Proper Waste Management",
                            desc: "Dispose of trash regularly and use covered bins to avoid attracting pests like flies and rodents.",
                        },
                        {
                            title: "3. Seal Entry Points",
                            desc: "Close cracks, holes, and gaps in doors and windows to prevent pests from entering your home.",
                        },
                        {
                            title: "4. Use Pest Control Products",
                            desc: "Apply insecticides, sprays, and repellents where necessary to control pest infestations.",
                        },
                        {
                            title: "5. Eliminate Standing Water",
                            desc: "Standing water attracts mosquitoes. Always drain water from containers and surroundings.",
                        },
                        {
                            title: "6. Store Food Properly",
                            desc: "Keep food in sealed containers to prevent contamination and pest attraction.",
                        },
                        {
                            title: "7. Hire Professional Services",
                            desc: "For severe infestations, professional pest control services provide safe and effective solutions.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-700">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">
                    Additional Tips
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    <li>Inspect your home regularly for signs of pests</li>
                    <li>Use natural remedies where possible</li>
                    <li>Keep your surroundings tidy</li>
                    <li>Schedule periodic pest control treatments</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    Conclusion
                </h2>
                <p className="text-gray-700 mb-6">
                    Employing effective pest control strategies is key to maintaining a clean and
                    healthy home. By combining cleanliness, preventive measures, and professional
                    services when needed, you can keep your home pest-free all year round.
                </p>

                <div className="border-t pt-4 text-sm text-gray-500 text-center">
                    © 2026 | Written by Michael Ezeadichie
                </div>
            </div>
        </div>
    );
}
