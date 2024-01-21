import DepositSection from "@/components/deposit-section"
import HeaderSection from "@/components/header-section"

export default function Page() {
    return (
        <>
            <HeaderSection />
            <div className="min-h-viewport-minus-sections">
                
                <DepositSection />

            </div>
        </>
    )
  }