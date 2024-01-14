import DashboardSection from "@/components/dashboard-section"
import HeaderSection from "@/components/header-section"

export default function Page() {
    return (
        <>
            <HeaderSection />
            <div className="min-h-viewport-minus-sections">
                <DashboardSection />
            </div>
        </>
    )
  }