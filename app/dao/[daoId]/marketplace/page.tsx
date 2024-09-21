"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ContributorMarketplace = () => {
  const [products] = useState([
    {
      id: 1,
      type: "NFT",
      name: "CryptoArt NFT",
      price: 1.5,
      description: "Limited edition NFT art piece.",
    },
    {
      id: 2,
      type: "Hardware Wallet",
      name: "Ledger Nano X",
      price: 120,
      description: "Secure hardware wallet for your crypto assets.",
    },
    {
      id: 3,
      type: "Merch",
      name: "DAO T-shirt",
      price: 25,
      description: "Exclusive DAO-branded T-shirt.",
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-900 text-white font-mont">
      <section className="p-4 md:px-16 lg:max-w-5xl lg:mx-auto py-[50px] md:py-[80px]">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">Marketplace</h2>

        <ul className="space-y-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="p-4 bg-gray-800 rounded-lg shadow-lg"
            >
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl font-bold">{product.name}</h4>
                  <p className="text-gray-400">{product.description}</p>
                  <p className="text-gray-300 mt-2">Price: ${product.price}</p>
                  <p className="text-gray-300 mt-2">Type: {product.type}</p>
                </div>
                <Button className="bg-emerald-500 text-white">Buy</Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ContributorMarketplace;
