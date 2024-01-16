"use client";

import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useAccount } from "wagmi";
import ConnectKitHeaderButton from "./connectkit-header-button";


export default function HeaderSection() {

  const { isConnected } = useAccount();

  return (
    <div className="px-1 md:px-6 lg:px-12 py-6">
        <div className="bg-white rounded-lg flex justify-between items-center px-1 md:px-3 lg:px-6 py-4 shadow-sm border-grey border-[1px]">

            <div className="flex items-center">
            { isConnected && (
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                <Link href="/" className="block px-2 py-1 text-lg">
                      Home
                      </Link>
                      <Link href="/dashboard" className="block px-2 py-1 text-lg">
                      Dashboard
                      </Link>
                      <Link href="/deposit" className="block px-2 py-1 text-lg">
                      Create Stream
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            )}
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">Streamline</h1>
            </Link>
          </div>

            <nav className="mx-4 flex items-center space-x-2 lg:space-x-4 hidden md:block">
            { isConnected && (
              <>
              <Button asChild variant="ghost">
                  <Link href="/" className="text-sm font-medium transition-colors">
                      Home
                  </Link>
              </Button>
              <Button asChild variant="ghost">
                  <Link href="/dashboard" className="text-sm font-medium transition-colors">
                      Dashboard
                  </Link>
              </Button>
              <Button asChild variant="ghost">
                  <Link href="/deposit" className="text-sm font-medium transition-colors">
                    Create Stream
                  </Link>
              </Button>
              </>
            )}
            </nav>

            <div className="flex items-center">
              <ConnectKitHeaderButton />
            </div>
        </div>
    </div>
  )
}

