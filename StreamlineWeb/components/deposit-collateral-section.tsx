"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";

import { JSX, SVGProps } from "react";
import React, { useState } from 'react';

import { StreamLineAbi } from '../abi/stream-line-abi'
import { createWalletClient, custom } from 'viem'
import { sepolia } from 'viem/chains'

export default function DepositCollateralSection() {

  const [spenderAddress, setSpenderAddress] = useState("0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357");
  const [approveAmount, setApproveAmount] = useState("50000000000000000");
  const [depositPeriodDays, setDepositPeriodDays] = useState("60");

  const walletClient = createWalletClient({
    chain: sepolia,
    transport: custom((window as any).ethereum)
  })


  const approveAmountProcess = async () => {

    const [account] = await walletClient.getAddresses();

    await walletClient.writeContract({
      address:  process.env.NEXT_PUBLIC_STREAMLINE_CONTRACT_ADDRESS_SEPOLIA as `0x${string}`,
      abi: StreamLineAbi,
      functionName: 'depositCollateral',
      args: [spenderAddress as `0x${string}`, approveAmount as unknown as bigint, depositPeriodDays as unknown as bigint],
      account: account,
      chain: sepolia
    }).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });  

  }

  return (
    <div className="max-w-5.35xl mx-auto p-4 border border-gray-200 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Deposit Collateral</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="recipient">Recipient</label>
            <Input id="recipient" 
              value={spenderAddress}
              onChange={e => setSpenderAddress(e.target.value)} 
              placeholder="0x123...456" />
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <label className="block text-sm font-medium" htmlFor="amount">Amount</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  <BitcoinIcon className="h-4 w-4" />
                </span>
                <Input id="amount" type="number" 
                  value={approveAmount}
                  onChange={e => setApproveAmount(e.target.value)} 
                  className="rounded-none rounded-r-md"  placeholder="1000" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="deposit-period">
              Deposit Period
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
                <Input
                className="flex-1 block w-[150px] rounded-none rounded-l-md sm:text-sm border-gray-300"
                id="deposit-period"
                value={depositPeriodDays}
                onChange={e => setDepositPeriodDays(e.target.value)}
                placeholder="60"
                type="number"
              />
              <Select>
                <SelectTrigger id="period">
                  <SelectValue placeholder="Days" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="days">Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>


        </div>

        <div className="space-y-4">

        </div>
      </div>

      <div className="mt-8">
        <Button variant={"outline"} onClick={() => {approveAmountProcess()}} className="border border-black border-2 shadow-left-bottom hover">
          Deposit
        </Button>
      </div>
    </div>
  );
}

function BitcoinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  );
}

