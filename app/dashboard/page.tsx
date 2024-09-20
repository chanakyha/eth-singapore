// import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string; // Add image property
}

const cards: Card[] = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card",
    image: "", // Add image URL
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card",
    image: "", // Add image URL
  },
  // Add more cards to the array as needed
];

function Dashboard() {
  return (
    <section className="text-white font-lond">
      {/* Conditionally show large buttons when there are no DAOs */}
      {cards.length === 0 ? (
        <div className="mx-auto max-w-screen-xl px-4 py-32 flex-col lg:flex lg:h-[calc(100vh-80px)] lg:items-center lg:justify-center">
          <h1 className="mb-10 text-3xl font-semibold text-center">
            Welcome to DOG - Start your journey here
          </h1>
          <div className="flex flex-row justify-evenly items-stretch gap-6">
            <div className="px-6 py-4 rounded-lg border-4 border-emerald-400 bg-transparent transform transition-all duration-300 hover:scale-110 hover:border-emerald-500/60">
              <div className="p-6 rounded-lg">
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-3xl font-extrabold tracking-wider text-center sm:text-5xl text-mont">
                  Register DAO
                </h1>
              </div>
            </div>

            <div className="px-6 py-4 rounded-lg border-4 border-emerald-400 bg-transparent transform transition-all duration-300 hover:scale-110 hover:border-emerald-500/60">
              <div className="p-6 rounded-lg">
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-3xl font-extrabold tracking-wider text-center sm:text-5xl text-mont">
                  Join DAO
                </h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>

          

          {/* DAO Cards Section */}
          <div className="mx-auto px-8 py-16">
            <div className="flex gap-4">
              <h1 className="text-4xl font-semibold text-left mb-12">
                Your DAOs
              </h1>
              <Button className="px-4 py-2 bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-600 transition">
                Register DAO
              </Button>
              <Button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
                Join DAO
              </Button>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((card) => (
                <li
                  key={card.id}
                  className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
                >
                  <Image
                    src={"https://nouns.center/earth.gif"}
                    alt={card.title}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-md"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2 text-gray-800">
                      {card.title}
                    </h2>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}

export default Dashboard;
