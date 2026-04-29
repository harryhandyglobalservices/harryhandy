import React from "react";

export default function PostConstructionCleaning() {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    Post-Construction Cleaning Checklist for New Buildings
                </h1>

                <p className="text-sm text-gray-500 mb-6">
                    By <span className="font-semibold">Michael Ezeadichie</span> • April 2026
                </p>

                <p className="text-gray-700 mb-6">
                    After construction or renovation, your property may look complete but is often filled with dust, debris,
                    and leftover materials. Post-construction cleaning is essential to make the space safe, clean, and ready
                    for use. This checklist will guide you through everything you need to properly clean a new building.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Complete Cleaning Checklist
                </h2>

                <div className="space-y-6">
                    {[
                        {
                            title: "1. Remove Debris and Trash",
                            desc: "Clear out leftover construction materials such as wood pieces, cement bags, nails, and packaging.",
                        },
                        {
                            title: "2. Dust All Surfaces",
                            desc: "Clean dust from walls, ceilings, windows, and fixtures using microfiber cloths or dusters.",
                        },
                        {
                            title: "3. Clean Floors Thoroughly",
                            desc: "Sweep, vacuum, and mop floors to remove fine dust and stains left after construction.",
                        },
                        {
                            title: "4. Wash Windows and Glass",
                            desc: "Remove paint stains, dust, and smudges from windows, mirrors, and glass surfaces.",
                        },
                        {
                            title: "5. Deep Clean Kitchen Areas",
                            desc: "Clean cabinets, countertops, sinks, and appliances to remove dust and construction residue.",
                        },
                        {
                            title: "6. Sanitize Bathrooms",
                            desc: "Scrub toilets, tiles, sinks, and showers to remove dirt, stains, and germs.",
                        },
                        {
                            title: "7. Clean Doors, Frames, and Fixtures",
                            desc: "Wipe down doors, handles, switches, and light fixtures to remove dust and fingerprints.",
                        },
                        {
                            title: "8. Remove Paint and Cement Stains",
                            desc: "Carefully scrape off paint splashes and cement residues from surfaces.",
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
                    <li>Start cleaning from top to bottom</li>
                    <li>Use protective gear like gloves and masks</li>
                    <li>Use proper cleaning chemicals for tough stains</li>
                    <li>Consider hiring professionals for large spaces</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    Conclusion
                </h2>
                <p className="text-gray-700 mb-6">
                    Post-construction cleaning is a crucial step before occupying any new building. By following this checklist,
                    you can ensure your space is spotless, safe, and ready for comfortable living or work.
                </p>

                <div className="border-t pt-4 text-sm text-gray-500 text-center">
                    © 2026 | Written by Michael Ezeadichie
                </div>
            </div>
        </div>
    );
}
