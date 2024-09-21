"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ContributorEvents = () => {
  const [events] = useState([
    {
      id: 1,
      title: "DAO Webinar",
      date: "2024-10-01",
      description: "Join us for the DAO expansion webinar.",
    },
    {
      id: 2,
      title: "IRL Meetup",
      date: "2024-10-05",
      description: "In-person meetup for DAO members.",
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-900 text-white font-mont">
      <section className="p-4 md:px-16 lg:max-w-5xl lg:mx-auto py-[50px] md:py-[80px]">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">Upcoming Events</h2>

        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl font-bold">{event.title}</h4>
                  <p className="text-gray-400">{event.description}</p>
                  <p className="text-gray-300 mt-2">Date: {event.date}</p>
                </div>
                <Button className="bg-emerald-500 text-white">Join</Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ContributorEvents;
