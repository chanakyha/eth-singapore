"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ContributorDashboard = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-900 text-white font-mont">
      <section className="p-4 md:px-16 lg:max-w-5xl lg:mx-auto py-[50px] md:py-[80px]">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Contributor Dashboard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tasks Overview */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Active Tasks</h3>
            <p className="text-gray-400 mb-4">
              View tasks and bounties available for contribution.
            </p>
            <Button
              className="bg-emerald-500 text-white w-full"
              onClick={() => router.push("/dao/contributor/tasks")}
            >
              View Tasks
            </Button>
          </div>

          {/* Polls Overview */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Active Polls</h3>
            <p className="text-gray-400 mb-4">
              Participate in DAO governance by voting on proposals.
            </p>
            <Button
              className="bg-emerald-500 text-white w-full"
              onClick={() => router.push("/dao/contributor/polls")}
            >
              View Polls
            </Button>
          </div>

          {/* Events Overview */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
            <p className="text-gray-400 mb-4">
              Join online events, IRL events, or participate in giveaways.
            </p>
            <Button
              className="bg-emerald-500 text-white w-full"
              onClick={() => router.push("/dao/contributor/events")}
            >
              View Events
            </Button>
          </div>

          {/* Marketplace Overview */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Marketplace</h3>
            <p className="text-gray-400 mb-4">
              Browse and purchase NFTs, merchandise, and more.
            </p>
            <Button
              className="bg-emerald-500 text-white w-full"
              onClick={() => router.push("/dao/contributor/marketplace")}
            >
              View Marketplace
            </Button>
          </div>

          {/* Community Chat Overview */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Community Chat</h3>
            <p className="text-gray-400 mb-4">
              Join discussions and interact with other contributors.
            </p>
            <Button
              className="bg-emerald-500 text-white w-full"
              onClick={() => router.push("/dao/contributor/community")}
            >
              Join Chat
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContributorDashboard;
