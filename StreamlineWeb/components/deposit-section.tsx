"use client"

import { Label } from '@/components/ui/label'
import CreateStreamSection from './create-stream-section'
import ApproveContractSection from './approve-contract'


export default function DepositSection() {
  
  return (
    <div className="text-black bg-white py-2 md:py-12 lg:py-32 px-8">
      {/* <Label className="text-2xl font-bold">Streamline Deposit</Label> */}

      <ApproveContractSection />
       <br />
      <CreateStreamSection />
   </div>
  )
}

