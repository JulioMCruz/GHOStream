"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ConnectKitButton, useModal } from "connectkit";
import { useAccount, useDisconnect } from "wagmi";

export default function CallToActionSection() {

    const { isConnected, address, isConnecting } = useAccount();
    const { setOpen } = useModal();
    const { disconnect } = useDisconnect();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget justo sodales, ornare justo sit amet, fringilla augue.</p>
          </div>
          <div className="px-6 py-4 bg-gray-100 dark:bg-gray-900">
            { !isConnected && (
                <Button onClick={() => setOpen(true)} >
                  Join Now
                </Button>
              )}
              { isConnected && (
                <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/dashboard"
                >
                Get Started
                </Link>
                )
              }
          </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Deposit</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget justo sodales, ornare justo sit amet, fringilla augue.</p>
          </div>
          <div className="px-6 py-4 bg-gray-100 dark:bg-gray-900">
              { !isConnected && (
                <Button onClick={() => setOpen(true)} >
                  Join Now
                </Button>
              )}
              { isConnected && (
                <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/deposit"
                >
                Get Started
                </Link>
                )
              }
          </div>
        </div>
      </div>
    </section>
  )
}

