"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Head from "next/head";

const AdminDashboard = () => {
  const router = useRouter();

  const redirectToPage = (page: string) => {
    router.push(page);
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard | DAO Name</title>
      </Head>
      <main className="min-h-screen tracking-widest text-white font-lond">
        <section className="p-4 md:px-16 lg:max-w-5xl lg:mx-auto py-[50px] md:py-[80px]">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-5xl font-bold">Admin Dashboard</h2>
            <p className="text-gray-400 mt-2 text-lg">
              Select an action to manage your DAO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Manage Community */}
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all"
              onClick={() => redirectToPage("/dao/[daoId]/admin/community")}
            >
              <div className="card-icon mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-emerald-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Manage Community</h3>
              <p className="text-gray-400 mb-4">
                Control community channels, members, and engagement.
              </p>
              <Button className="bg-emerald-500 text-white w-full">
                Go to Community
              </Button>
            </div>

            {/* Manage Events */}
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all"
              onClick={() => redirectToPage("/dao/[daoId]/admin/events")}
            >
              <div className="card-icon mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-emerald-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Manage Events</h3>
              <p className="text-gray-400 mb-4">
                Organize IRL and online events for the DAO.
              </p>
              <Button className="bg-emerald-500 text-white w-full">
                Go to Events
              </Button>
            </div>

            {/* Manage Marketplace */}
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all"
              onClick={() => redirectToPage("/dao/[daoId]/admin/marketplace")}
            >
              <div className="card-icon mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-emerald-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Manage Marketplace</h3>
              <p className="text-gray-400 mb-4">
                Manage products listed in the DAO&apos;s marketplace.
              </p>
              <Button className="bg-emerald-500 text-white w-full">
                Go to Marketplace
              </Button>
            </div>

            {/* Manage Polls */}
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all"
              onClick={() => redirectToPage("/dao/[daoId]/admin/polls")}
            >
              <div className="card-icon mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-emerald-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Manage Polls</h3>
              <p className="text-gray-400 mb-4">
                Create and manage governance polls for your DAO.
              </p>
              <Button className="bg-emerald-500 text-white w-full">
                Go to Polls
              </Button>
            </div>

            {/* Manage Tasks */}
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all"
              onClick={() => redirectToPage("/dao/[daoId]/admin/tasks")}
            >
              <div className="card-icon mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-emerald-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Manage Tasks</h3>
              <p className="text-gray-400 mb-4">
                Assign and manage tasks/bounties for contributors.
              </p>
              <Button className="bg-emerald-500 text-white w-full">
                Go to Tasks
              </Button>
            </div>

            {/* DAO Settings */}
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all"
              onClick={() => redirectToPage("/dao/[daoId]/admin/settings")}
            >
              <div className="card-icon mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-emerald-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">DAO Settings</h3>
              <p className="text-gray-400 mb-4">
                Configure DAO settings, roles, and permissions.
              </p>
              <Button className="bg-emerald-500 text-white w-full">
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
