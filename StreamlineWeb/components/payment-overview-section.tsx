import { Button } from "@/components/ui/button"
import { Tabs } from "@/components/ui/tabs"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { JSX, SVGProps } from "react"
import Link from "next/link"

export default function PaymentsOverviewSection() {
  return (
    <div className="flex flex-col p-6">
      <h1 className="text-4xl font-bold mb-6">Payments overview</h1>
      <Tabs className="mb-4">
        <Button className="mr-2" variant="outline">
          Streaming Payments
        </Button>
        <Button variant="outline">Deposit Positions</Button>
      </Tabs>
      <div className="flex justify-between items-center mb-4">
        <Tabs>
          <Button className="mr-2" variant="secondary">
            All payments
          </Button>
          <Button className="mr-2" variant="outline">
            Succeeded
          </Button>
          <Button variant="outline">Failed</Button>
        </Tabs>
        {/* <Button>Create Stream</Button> */}
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md px-8 border border-black border-2 shadow-left-bottom"
          href="/deposit"
          >
          Create Stream
        </Link>        
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">STREAM NAME</TableHead>
              <TableHead className="text-left">RECEIVER ADDRESS</TableHead>
              <TableHead className="text-left">STATUS</TableHead>
              <TableHead className="text-left">AMOUNT</TableHead>
              <TableHead className="text-left">CURRENT STREAM</TableHead>
              <TableHead className="text-left">CREATION PERIOD</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Landing page Freelance</TableCell>
              <TableCell>06c1774-7f3d-46ad...90a8</TableCell>
              <TableCell>
                <Badge variant="secondary">Succeeded</Badge>
              </TableCell>
              <TableCell>6737.98</TableCell>
              <TableCell>
                <CurrencyIcon className="inline-block mr-2" />
                2000/6737.98
              </TableCell>
              <TableCell>Mar 23, 2022, 13:00 PM</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function CurrencyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
