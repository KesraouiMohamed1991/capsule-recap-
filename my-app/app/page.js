'use client';
import Image from "next/image";
import BootcampProgress from "./BootcampProgress";
export default function Home() {
  return (

      <main className="w-full relative h-full font-[family-name:var(--font-geist-mono)] ">
        {/* <div className="absolute w-20 h-96 transform -rotate-45   rounded-full shadow-lime-500 shadow-2xl  "></div> */}
<BootcampProgress/>
      </main>
  );
}
