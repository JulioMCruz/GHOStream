"use client"

import { Button } from "./ui/button"


export default function HeroSection() {

  return (
    <div className=" pt-[20px] md:pt-[50px] lg:pt-[100px] pb-[5px] md:pb-[25px] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4 leading-snug">Streamline</h1>
      <h1 className="text-md md:text-xl lg:text-4xl font-bold mb-4 leading-snug  max-w-4xl">
      Nulla scelerisque libero sagittis velit aliquet
      </h1>
      <p className="mb-2 md:mb-12 text-md md:text-lg lg:text-xl leading-snug max-w-4xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget justo sodales, ornare justo sit amet, fringilla augue. Vestibulum dignissim enim at hendrerit fermentum. Quisque ornare libero sed ultricies viverra. Nulla facilisi. Fusce vitae nulla velit. Aenean quis massa eget magna vehicula lacinia. Donec a tortor eget tellus scelerisque vehicula ac ut dolor.
      </p>
    </div>
  )
}

