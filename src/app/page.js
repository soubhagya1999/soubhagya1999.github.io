import Image from "next/image";
import React from 'react';
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import OnHoldInfoSection from "./components/OnHoldInfoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#497a92]">
      <OnHoldInfoSection />
      <SideBar />
      <SearchBar />
    </main>
  );
}
