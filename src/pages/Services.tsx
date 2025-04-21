import React from 'react'; 
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/profile/Header";

const Services = () => {
  const userName = "Amritansh";
  const userAvatar = "/lovable-uploads/0e87068f-98dc-4c31-8d91-35f321e3390b.png";

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header userName={userName} userAvatar={userAvatar} />
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-600 mb-8">
            Explore our range of services designed to help influencers and brands connect and grow together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service cards would go here */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-3">Influencer Matching</h2>
              <p className="text-gray-500">Connect with brands that align with your values and audience.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-3">Campaign Management</h2>
              <p className="text-gray-500">Streamlined tools to manage your brand collaborations from start to finish.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-3">Analytics Dashboard</h2>
              <p className="text-gray-500">Track your performance and engagement across all platforms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
