import React from 'react'; 
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/profile/Header";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const userName = "Amritansh";
  const userAvatar = "/lovable-uploads/0e87068f-98dc-4c31-8d91-35f321e3390b.png";

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header userName={userName} userAvatar={userAvatar} />
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-purple-DEFAULT hover:bg-purple-light">Send Message</Button>
              </form>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-1">Address</h3>
                  <p className="text-gray-600">123 Innovation Street, Tech City, CA 90210</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-gray-600">support@udm.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday to Friday: 9am - 6pm<br />Saturday: 10am - 4pm</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">FB</a>
                  <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">TW</a>
                  <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">IG</a>
                  <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">LI</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
