'use client';

import * as React from 'react';
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

import { sepolia } from "wagmi/chains";

const chains = [sepolia];

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",

    // Required
    appName: "GHOStream",

    // Optional
    appDescription: "GHOStream",
    appUrl: "https://ghostream.vercel.app/",
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    chains
  }),
);

export const ConnectkitProvider = ({ children }: { children: React.ReactNode }) => {

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        { mounted && children }
      </ConnectKitProvider>
    </WagmiConfig>
  );
};