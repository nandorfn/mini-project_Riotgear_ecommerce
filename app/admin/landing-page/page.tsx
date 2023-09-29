'use client'
import Input from "@/app/components/Form/Input";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Table from "@/app/components/Table/Table";



const Page: React.FC = () => {



  return (
    <>
      <div className="flex flex-col gap-8">
        <HeroSection />
        <Table
          label={"List Display Products"}
        />
      </div>

    </>
  );
};

export default Page;