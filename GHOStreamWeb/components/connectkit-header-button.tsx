"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { ConnectKitButton, useModal } from "connectkit";
import { useAccount, useDisconnect } from "wagmi";

export default function ConnectKitHeaderButton() {

    const { isConnected, address, isConnecting } = useAccount();
    const { setOpen } = useModal();
    const { disconnect } = useDisconnect();
  
  return (
    <> 
              <div className="hidden lg:block">
              <ConnectKitButton showBalance showAvatar label="Join Now" />
              </div>
              <div className="lg:hidden ">
                <ConnectKitButton label="Join Now" />
              </div>   

              {/* { !isConnected && (
                <Button onClick={() => setOpen(true)} >
                  Connect
                </Button>
              )}
              { isConnected && (
                <div>
                  <Button onClick={() => disconnect()}>
                    Disconnect
                  </Button>
                </div>
              )
              } */}
    </>    
  )
}

