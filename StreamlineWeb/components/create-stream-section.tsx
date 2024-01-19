
// import { Input } from "@/components/ui/input"
// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { JSX, SVGProps } from "react"
// import { Slider } from "@/components/ui/slider"
// import React, { useState } from 'react';
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// export default function CreateStreamSection() {
//   const [riskTolerance, setRiskTolerance] = useState(10);
  
//   const handleSliderChange = (value) => {
//     setRiskTolerance(value);
//   };
  
//   return (
    
//       <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">

//         <h1 className="text-2xl font-bold mb-6 col-span-full">New Stream</h1>


//       <div className="space-y-">
//         <div>
//           <label className="block text-sm font-medium" htmlFor="recipient">Recipient</label>
//           <Input id="recipient" placeholder="0x123...456" />
//         </div>
        
//         <div className="flex items-center space-x-2">
//           <div className="flex-1">
//             <label className="block text-sm font-medium" htmlFor="amount">Amount</label>
//             <div className="flex">
//               <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
//                 <BitcoinIcon className="h-4 w-4" />
//               </span>
//               <Input className="rounded-none rounded-r-md" id="amount" placeholder="1000" />
//             </div>
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium" htmlFor="orderId">OrderId</label>
//           <Input id="orderId" placeholder="1" />
//         </div>

//         <div>
//           <label className="block text-sm font-medium" htmlFor="asset">Asset</label>
//           <Select className="mt-1">
//             <SelectTrigger id="asset">
//               <SelectValue placeholder="ETH" />
//             </SelectTrigger>
//             <SelectContent position="popper">
//               <SelectItem value="eth">ETH</SelectItem>
//               <SelectItem value="btc">BTC</SelectItem>
//               <SelectItem value="ltc">LTC</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium" htmlFor="duration">Duration</label>
//           <Select>
//             <SelectTrigger id="duration">
//               <SelectValue placeholder="30" />
//             </SelectTrigger>
//             <SelectContent position="popper">
//               <SelectItem value="30">30 Days</SelectItem>
//               <SelectItem value="60">60 Days</SelectItem>
//               <SelectItem value="90">90 Days</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium" htmlFor="deposit-period">
//             Deposit Period
//           </label>
//           <div className="mt-1 flex rounded-md shadow-sm">
//             <Input
//               className="flex-1 block w-[150px] rounded-none rounded-l-md sm:text-sm border-gray-300"
//               id="deposit-period"
//               placeholder="60"
//               type="number"
//             />
//             <Select>
//               <SelectTrigger id="period">
//                 <SelectValue placeholder="Days" />
//               </SelectTrigger>
//               <SelectContent position="popper">
//                 <SelectItem value="days">Days</SelectItem>
//                 <SelectItem value="weeks">Weeks</SelectItem>
//                 <SelectItem value="months">Months</SelectItem>
//                 <SelectItem value="years">Years</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         <div>
//         <label className="block text-sm font-medium" htmlFor="risk-tolerance">Risk Tolerance</label>
//         <div className="flex items-center space-x-2">
//           <Slider 
//             defaultValue={[riskTolerance]} 
//             min={0} 
//             max={20} 
//             step={2} 
//             onChange={handleSliderChange}
//           />
//           <span>{riskTolerance}%</span>
//         </div>
//       </div>
    
//       </div>

//       <div className="col">
//         <Button variant={"outline"} className="mt-8 border border-black border-2 shadow-left-bottom w-full">
//           Deposit & Create Stream
//         </Button>
//       </div>
//     </div>
    
//   )
// }

// function BitcoinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
//     </svg>
//   )
// }
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import { Slider } from "@/components/ui/slider";
import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CreateStreamSection() {
  const [riskTolerance, setRiskTolerance] = useState(10);

  const handleSliderChange = (value) => {
    setRiskTolerance(value);
  };

  return (
    <div className="max-w-5.35xl mx-auto p-4 border border-gray-200 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">New Stream</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="recipient">Recipient</label>
            <Input id="recipient" placeholder="0x123...456" />
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <label className="block text-sm font-medium" htmlFor="amount">Amount</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  <BitcoinIcon className="h-4 w-4" />
                </span>
                <Input className="rounded-none rounded-r-md" id="amount" placeholder="1000" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="orderId">OrderId</label>
            <Input id="orderId" placeholder="1" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="asset">Asset</label>
            <Select>
              <SelectTrigger id="asset">
                <SelectValue placeholder="ETH" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="eth">ETH</SelectItem>
                <SelectItem value="btc">BTC</SelectItem>
                <SelectItem value="ltc">LTC</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="duration">Duration</label>
            <Select>
              <SelectTrigger id="duration">
                <SelectValue placeholder="30" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="30">30 Days</SelectItem>
                <SelectItem value="60">60 Days</SelectItem>
                <SelectItem value="90">90 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="deposit-period">
              Deposit Period
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <Input
                className="flex-1 block w-[150px] rounded-none rounded-l-md sm:text-sm border-gray-300"
                id="deposit-period"
                placeholder="60"
                type="number"
              />
              <Select>
                <SelectTrigger id="period">
                  <SelectValue placeholder="Days" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="days">Days</SelectItem>
                  <SelectItem value="weeks">Weeks</SelectItem>
                  <SelectItem value="months">Months</SelectItem>
                  <SelectItem value="years">Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="risk-tolerance">Risk Tolerance</label>
            <div className="flex items-center space-x-2">
              <Slider
                defaultValue={[riskTolerance]}
                min={0}
                max={20}
                step={2}
                onChange={handleSliderChange}
              />
              <span>{riskTolerance}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button variant={"outline"} className="border border-black border-2 shadow-left-bottom hover bg-green">
          Deposit & Create Stream
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
