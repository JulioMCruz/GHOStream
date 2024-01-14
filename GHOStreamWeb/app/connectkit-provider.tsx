'use client';

import * as React from 'react';

import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { sepolia } from "wagmi/chains";
import { publicProvider } from 'wagmi/providers/public';
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";


import { supportedSocialConnectors} from '@zerodev/wagmi/connectkit'
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { supportedConnectors} from "connectkit";
supportedConnectors.push(...supportedSocialConnectors)

import { 
  GoogleSocialWalletConnector, 
  FacebookSocialWalletConnector,
  GithubSocialWalletConnector,
  DiscordSocialWalletConnector,
  TwitchSocialWalletConnector,
  TwitterSocialWalletConnector,
  Auth0WalletConnector,
  ZeroDevConnector,
} from '@zerodev/wagmi'

const allowedChains = [sepolia]
const options = { allowedChains, options: { projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID || "" } } 
const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",

    // Required
    appName: "Streamline",

    // Optional
    appDescription: "Streamline",
    // appUrl: "https://ghostream.vercel.app/",
    // appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    chains: allowedChains,
     connectors: [
       new GoogleSocialWalletConnector(options),
      //  new FacebookSocialWalletConnector(options),
       new GithubSocialWalletConnector(options),
       new DiscordSocialWalletConnector(options),
       new TwitchSocialWalletConnector(options),
       new TwitterSocialWalletConnector(options),
       new InjectedConnector({ 
        chains: allowedChains,
       }),
       new CoinbaseWalletConnector({
        chains: allowedChains,
        options: { appName: "Streamline" }
       }),
  //     new WalletConnectConnector({
  //       chains: allowedChains,
  //       options: {
  //       projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
  //       showQrModal: false,            
  //      }
  //      }),        
   ],
  }),
);


export const ConnectkitProvider = ({ children }: { children: React.ReactNode }) => {

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
  <>
    { mounted && (
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          { mounted && children }
        </ConnectKitProvider>
      </WagmiConfig>
    )}
  </>
  );
};