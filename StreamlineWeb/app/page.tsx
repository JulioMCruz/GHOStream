import CallToActionSection from '@/components/call-to-action-section'
import HeaderLandingSection from '@/components/header-landing-section'
import HeroSection from '@/components/hero-section'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HeaderLandingSection />
      <HeroSection />
      <CallToActionSection />
    </>
  )
}
