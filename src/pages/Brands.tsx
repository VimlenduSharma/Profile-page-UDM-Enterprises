import React from 'react'; 
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/profile/Header";

const Brands = () => {
  const userName = "Amritansh";
  const userAvatar = "/lovable-uploads/0e87068f-98dc-4c31-8d91-35f321e3390b.png";

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header userName={userName} userAvatar={userAvatar} />
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Brands</h1>
          <p className="text-gray-600 mb-8">
            Discover brands looking for influencers like you to collaborate with.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Brand cards would go here */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-3">Nike</h2>
              <p className="text-gray-500">Sports and athletic wear brand looking for fitness influencers.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-3">Sephora</h2>
              <p className="text-gray-500">Beauty retailer seeking makeup and skincare content creators.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-3">Blue Apron</h2>
              <p className="text-gray-500">Meal kit service looking for food and lifestyle influencers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
