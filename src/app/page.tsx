'use client'
import { SearchBar } from "@/components/SearchBar/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <Image priority={true} src={'/assets/logos/pickle-logo-white.png'} width={196} height={62} alt='pickle-app-logo' />
      <SearchBar />
    </main>
  );
}
