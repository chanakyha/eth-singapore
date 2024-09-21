"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ContributorTasks = () => {
  const [tasks] = useState([
    {
      id: 1,
      title: "Fix UI Bugs",
      description: "Contribute by fixing UI bugs",
      reward: "100 DAO tokens",
    },
    {
      id: 2,
      title: "Write Documentation",
      description: "Help document the DAO project",
      reward: "200 DAO tokens",
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-900 text-white font-mont">
      <section className="p-4 md:px-16 lg:max-w-5xl lg:mx-auto py-[50px] md:py-[80px]">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">Available Tasks</h2>

        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl font-bold">{task.title}</h4>
                  <p className="text-gray-400">{task.description}</p>
                  <p className="text-gray-300 mt-2">Reward: {task.reward}</p>
                </div>
                <Button className="bg-emerald-500 text-white">
                  Participate
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ContributorTasks;
