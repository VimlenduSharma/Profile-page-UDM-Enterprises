import React from 'react'; 
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/profile/Header";

const About = () => {
  const userName = "Amritansh";
  const userAvatar = "/lovable-uploads/0e87068f-98dc-4c31-8d91-35f321e3390b.png";

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header userName={userName} userAvatar={userAvatar} />
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">About UDM</h1>
          <div className="bg-white rounded-lg shadow p-8">
            <p className="text-gray-600 mb-6">
              UDM is a platform that connects influencers with brands for meaningful collaborations. 
              Our mission is to create authentic partnerships that benefit both creators and companies.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2023, we've helped thousands of influencers find the right brand partnerships 
              and assisted companies in connecting with creators who truly represent their values.
            </p>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3"></div>
                  <h3 className="font-medium">John Smith</h3>
                  <p className="text-sm text-gray-500">CEO & Founder</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3"></div>
                  <h3 className="font-medium">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Head of Partnerships</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3"></div>
                  <h3 className="font-medium">Michael Chen</h3>
                  <p className="text-sm text-gray-500">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
