import { Londrina_Solid } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Navbar from "@/components/navbar";

const lond = Londrina_Solid({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DOG",
  description: "DAO on GO - DOG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lond.variable}  antialiased`}>
        <DynamicContextProvider
          settings={{
            environmentId: "e5ea86bf-8772-4b57-87ca-e1a532093fc6",
            walletConnectors: [EthereumWalletConnectors],
          }}
        >
          <Navbar />
          {children}
        </DynamicContextProvider>
      </body>
    </html>
  );
}
