'use client';

import * as React from 'react';

import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { sepolia } from "wagmi/chains";
import { publicProvider } from 'wagmi/providers/public';
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { SafeConnector } from 'wagmi/connectors/safe'


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



export const ConnectkitProvider = ({ children }: { children: React.ReactNode }) => {

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const allowedChains = [sepolia]
  const options = { allowedChains, options: { projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID || "" } } 
  const config = createConfig(
    getDefaultConfig({
      // Required API Keys
      //infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
      alchemyId:  process.env.NEXT_PUBLIC_ALCHEMY_ID,
      walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
      
      // Required
      appName: "Streamline",
  
      // Optional
      appDescription: "Streamline",
      appUrl: "https://streamlineweb.vercel.app/",
      // appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
      chains: allowedChains,
       connectors: [
          new GoogleSocialWalletConnector(options),
          new TwitterSocialWalletConnector(options),
          new DiscordSocialWalletConnector(options),
          new GithubSocialWalletConnector(options),
          new TwitchSocialWalletConnector(options),
          new InjectedConnector({ 
           chains: allowedChains,
           options: {
            name: 'My Injected Wallet',
            getProvider: () =>
              typeof window !== 'undefined' ? window.ethereum : undefined,
          },           
          }),
          new CoinbaseWalletConnector({
           chains: allowedChains,
           options: { appName: "Streamline" }
          }),
          // new SafeConnector({
          //   chains: allowedChains,
          //   options: {
          //     allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
          //     debug: false,
          //   },
          // }),
          new WalletConnectConnector({
            chains: allowedChains,
            options: {
              projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
              showQrModal: false,
            },
          })
      ],
    }),
  );
  
  return (
      <WagmiConfig config={config}>
        <ConnectKitProvider 
          theme="retro" 
          options={{ 
            walletConnectName: "Others",
            disclaimer: "Here disclaimer text goes",
            hideNoWalletCTA: true,
          }}>
          { mounted && children }
        </ConnectKitProvider>
      </WagmiConfig>
  );
};