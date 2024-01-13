"use client"

import { Button } from "./ui/button"


export default function HeroSection() {

  return (
    <div className="pt-[200px] pb-[150px] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4 leading-snug">GHOStream</h1>
      <h1 className="text-7xl font-bold mb-4 leading-snug  max-w-4xl">
      Nulla scelerisque libero sagittis velit aliquet
      </h1>
      <p className="mb-12 text-xl leading-snug max-w-4xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget justo sodales, ornare justo sit amet, fringilla augue. Vestibulum dignissim enim at hendrerit fermentum. Quisque ornare libero sed ultricies viverra. Nulla facilisi. Fusce vitae nulla velit. Aenean quis massa eget magna vehicula lacinia. Donec a tortor eget tellus scelerisque vehicula ac ut dolor.
      </p>
      <Button>Connect</Button>
    </div>
  )
}

