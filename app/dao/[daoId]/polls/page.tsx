"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ContributorPolls = () => {
  const [polls] = useState([
    { id: 1, question: "Should the DAO expand?", options: ["Yes", "No"] },
    {
      id: 2,
      question: "Should we increase the bounty for tasks?",
      options: ["Yes", "No"],
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-900 text-white font-mont">
      <section className="p-4 md:px-16 lg:max-w-5xl lg:mx-auto py-[50px] md:py-[80px]">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">Active Polls</h2>

        <ul className="space-y-4">
          {polls.map((poll) => (
            <li key={poll.id} className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <div>
                <h4 className="text-xl font-bold">{poll.question}</h4>
                <div className="mt-4 space-x-4">
                  {poll.options.map((option, index) => (
                    <Button key={index} className="bg-emerald-500 text-white">
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ContributorPolls;
