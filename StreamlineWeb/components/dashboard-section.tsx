"use client"

import { Label } from '@/components/ui/label'
import { User } from 'lucide-react'
import AccountInformation from './account-information'

export default function DashboardSection() {
  
  return (
    <div className="text-black bg-white py-2 lg:py-16 px-8">
      {/* <Label className="text-2xl font-bold">Streamline Dashboard</Label> */}
      <AccountInformation />
   </div>
  )
}

