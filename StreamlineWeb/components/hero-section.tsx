import { Button } from "./ui/button"
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className=" pt-[20px] md:pt-[50px] lg:pt-[100px] pb-[5px] md:pb-[25px] flex flex-col items-center justify-center text-center px-4">
        
        <Image
          src="/logo.png" // Corrected path
          width={300}    // Desired width
          height={150}   // Desired height
          alt="Description"
          className="m-3" // Alt text for accessibility
        />
      <h1 className="text-md md:text-xl lg:text-4xl font-bold mb-4 leading-snug  max-w-4xl">
      Let your Assets Interest pay for your expenses.
      </h1>
      <p className="mb-2 md:mb-12 text-md md:text-lg lg:text-xl leading-snug max-w-4xl">
      Streamline enables to deposit any token, and Stream🚀 the interest with GHO
      </p>
      <Image
          src="/eth.png" // Corrected path
          width={500}    // Desired width
          height={300}   // Desired height
          alt="Description" // Alt text for accessibility
        />
    </div>
  )
}
