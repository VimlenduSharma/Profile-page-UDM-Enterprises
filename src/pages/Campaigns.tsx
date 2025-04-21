import React from 'react'; 
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/profile/Header";

const Campaigns = () => {
  const userName = "Amritansh";
  const userAvatar = "/lovable-uploads/0e87068f-98dc-4c31-8d91-35f321e3390b.png";

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header userName={userName} userAvatar={userAvatar} />
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Ongoing Campaigns</h1>
          <p className="text-gray-600 mb-8">
            Track and manage your active campaigns and collaborations.
          </p>
          <div className="space-y-6">
            {/* Campaign cards would go here */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Summer Collection Promotion</h2>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
              </div>
              <p className="text-gray-500 mb-4">Promote our new summer collection with 3 Instagram posts and 2 stories.</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Started: May 1, 2025</span>
                <span>Ends: June 15, 2025</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Product Review Series</h2>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Pending Approval</span>
              </div>
              <p className="text-gray-500 mb-4">Create honest reviews of our skincare line with before/after content.</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Start Date: June 1, 2025</span>
                <span>End Date: July 15, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
