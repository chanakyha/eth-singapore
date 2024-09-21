"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Head from "next/head";

const AdminDashboard = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Admin Dashboard | DAO Name</title>
      </Head>
      <main className="min-h-screen w-full bg-gray-900 font-mont text-white">
        <section className="p-4 md:px-16 lg:max-w-5xl lg:mx-auto py-[50px] md:py-[80px]">
          <div className="flex justify-between items-center pb-8">
            <h2 className="text-3xl lg:text-5xl font-bold">Admin Dashboard</h2>
            <Button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => router.push("/dao-dashboard")}
            >
              View DAO
            </Button>
          </div>

          {/* Admin Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Manage Community</h3>
              <p className="text-gray-300 mb-4">
                Control community channels, members, and engagement.
              </p>
              <Button
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
                onClick={() => router.push("/dao/[daoId]/admin/community")}
              >
                Go to Community
              </Button>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Manage Events</h3>
              <p className="text-gray-300 mb-4">
                Organize IRL and online events for the DAO.
              </p>
              <Button
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
                onClick={() => router.push("/dao/[daoId]/admin/events")}
              >
                Go to Events
              </Button>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Manage Marketplace</h3>
              <p className="text-gray-300 mb-4">
                Manage products listed in the DAOs marketplace.
              </p>
              <Button
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
                onClick={() => router.push("/dao/[daoId]/admin/marketplace")}
              >
                Go to Marketplace
              </Button>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Manage Polls</h3>
              <p className="text-gray-300 mb-4">
                Create and manage governance polls for your DAO.
              </p>
              <Button
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
                onClick={() => router.push("/dao/[daoId]/admin/polls")}
              >
                Go to Polls
              </Button>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Manage Tasks</h3>
              <p className="text-gray-300 mb-4">
                Assign and manage tasks/bounties for contributors.
              </p>
              <Button
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
                onClick={() => router.push("/dao/[daoId]/admin/tasks")}
              >
                Go to Tasks
              </Button>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">DAO Settings</h3>
              <p className="text-gray-300 mb-4">
                Configure DAO settings, roles, and permissions.
              </p>
              <Button
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
                onClick={() => router.push("/dao/[daoId]/admin/settings")}
              >
                Go to Settings
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminDashboard;
