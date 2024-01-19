"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { createPublicClient, createWalletClient, custom, http } from 'viem'
import { sepolia } from 'viem/chains'
import { wagmiAbi } from '../abi/abi'
import { sep } from 'path'
import { useAccount } from 'wagmi'
import { useContractRead } from "wagmi";

export default function AccountInformation() {

  const { address } = useAccount()

  const { data: userData, refetch: userDataRefetch } = useContractRead({
    address: process.env.NEXT_PUBLIC_STREAMLINE_CONTRACT_ADDRESS_SEPOLIA as `0x${string}`,
    abi: wagmiAbi,
    functionName: 'getAccountInformation',
    args: [address as `0x${string}`],
  });

  return (
      <section className="max-w-8xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <Button className="p-2 bg-transparent hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => userDataRefetch()}>
          <RefreshCwIcon className="text-gray-600" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-4">
        <Card className="bg-[#d1fae5] rounded-lg p-4">
          <div className="flex flex-col items-center">
            <UploadCloudIcon className="text-[#059669] mb-2" />
            <span className="text-sm text-[#059669]">Total Collateral Base</span>
            {userData && Array.isArray(userData) &&  (
              <span className="text-lg font-semibold">{userData[0]?.toString()}</span>
            )}
          </div>
        </Card>
        <Card className="bg-[#fee2e2] rounded-lg p-4">
          <div className="flex flex-col items-center">
            <DownloadCloudIcon className="text-[#dc2626] mb-2" />
            <span className="text-sm text-[#dc2626]">Total Debt Base</span>
            {userData && Array.isArray(userData) &&  (
              <span className="text-lg font-semibold">{userData[1]?.toString()}</span>
            )}
          </div>
        </Card>
        <Card className="bg-[#fef3c7] rounded-lg p-4">
          <div className="flex flex-col items-center">
            <HeartIcon className="text-[#d97706] mb-2" />
            <span className="text-sm text-[#d97706]">Available Borrows Base</span>
            {userData && Array.isArray(userData) &&  (
              <span className="text-lg font-semibold">{userData[2]?.toString()}</span>
            )}
          </div>
        </Card>
        <Card className="bg-[#dbeafe] rounded-lg p-4">
          <div className="flex flex-col items-center">
            <CurrencyIcon className="text-[#3b82f6] mb-2" />
            <span className="text-sm text-[#3b82f6]">Current Liquidation Threshold</span>
            {userData && Array.isArray(userData) &&  (
              <span className="text-lg font-semibold">{userData[3]?.toString()}</span>
            )}
          </div>
        </Card>
        <Card className="bg-[#dbeafe] rounded-lg p-4">
          <div className="flex flex-col items-center">
            <CurrencyIcon className="text-[#3b82f6] mb-2" />
            <span className="text-sm text-[#3b82f6]">LTV</span>
            {userData && Array.isArray(userData) &&  (
              <span className="text-lg font-semibold">{userData[4]?.toString()}</span>
            )}
          </div>
        </Card>
        <Card className="bg-[#dbeafe] rounded-lg p-4">
          <div className="flex flex-col items-center">
            <CurrencyIcon className="text-[#3b82f6] mb-2" />
            <span className="text-sm text-[#3b82f6]">Health Factor</span>
            {userData && Array.isArray(userData) &&  (
              <span className="text-lg font-semibold">{userData[5]?.toString()}</span>
            )}
          </div>
        </Card>
      </div>
    </section>      
  )
}

function CurrencyIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function DownloadCloudIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m8 17 4 4 4-4" />
    </svg>
  )
}


function HeartIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function RefreshCwIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}


function UploadCloudIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  )
}