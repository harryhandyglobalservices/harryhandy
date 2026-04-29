import React from "react";

export default function WeeklyVsDeepCleaning() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Weekly Housekeeping vs Deep Cleaning: What’s the Difference?
      </h1>

      {/* AUTHOR */}
      <p className="text-gray-500 mb-8">
        By <span className="text-blue-500 font-medium">Michael Ezeadichie</span> | April 2026
      </p>

      {/* INTRO */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        Keeping your home clean is essential for comfort, health, and peace of mind.
        But many people are unsure whether they need weekly housekeeping or deep cleaning.
        While both services improve cleanliness, they serve different purposes and are used at different times.
      </p>

      {/* SECTION 1 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        What is Weekly Housekeeping?
      </h2>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Weekly housekeeping focuses on maintaining cleanliness in your home on a regular basis.
        It involves routine tasks that keep your living space tidy and organized.
      </p>

      <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
        <li>Sweeping and mopping floors</li>
        <li>Dusting surfaces</li>
        <li>Cleaning bathrooms and kitchens</li>
        <li>Making beds and organizing spaces</li>
        <li>Taking out trash</li>
      </ul>

      <p className="text-gray-700 mb-6">
        This type of cleaning is ideal for busy individuals or families who want to maintain a consistently clean environment without stress.
      </p>

      {/* SECTION 2 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        What is Deep Cleaning?
      </h2>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Deep cleaning goes beyond regular housekeeping. It targets hidden dirt, bacteria, and buildup that accumulate over time.
        This type of cleaning is more thorough and detailed.
      </p>

      <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
        <li>Cleaning behind and under furniture</li>
        <li>Scrubbing tiles and grout</li>
        <li>Washing walls and baseboards</li>
        <li>Cleaning inside cabinets and appliances</li>
        <li>Removing stubborn stains and buildup</li>
      </ul>

      <p className="text-gray-700 mb-6">
        Deep cleaning is usually done monthly, quarterly, or before moving into a new space.
      </p>

      {/* SECTION 3 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Key Differences
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left">Feature</th>
              <th className="border p-3 text-left">Weekly Housekeeping</th>
              <th className="border p-3 text-left">Deep Cleaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">Frequency</td>
              <td className="border p-3">Weekly</td>
              <td className="border p-3">Occasional</td>
            </tr>
            <tr>
              <td className="border p-3">Depth</td>
              <td className="border p-3">Surface-level</td>
              <td className="border p-3">Thorough</td>
            </tr>
            <tr>
              <td className="border p-3">Time Required</td>
              <td className="border p-3">Short</td>
              <td className="border p-3">Longer</td>
            </tr>
            <tr>
              <td className="border p-3">Purpose</td>
              <td className="border p-3">Maintenance</td>
              <td className="border p-3">Intensive cleaning</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Which One Do You Need?
      </h2>

      <p className="text-gray-700 mb-6 leading-relaxed">
        If your home is already in good condition, weekly housekeeping is enough to maintain cleanliness.
        However, if you notice dirt buildup, stains, or hidden dust, then a deep cleaning service is the better choice.
      </p>

      {/* CONCLUSION */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Conclusion
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Both weekly housekeeping and deep cleaning are essential for a healthy living environment.
        The best approach is to combine both — regular maintenance with occasional deep cleaning —
        to keep your home fresh, safe, and comfortable at all times.
      </p>

    </div>
  );
}