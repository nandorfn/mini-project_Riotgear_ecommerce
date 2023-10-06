'use client'
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Form/Input";
import Table from "@/app/components/Table/Table";
import { headTableBlog } from "@/app/helpers/dataObject";
import { useState } from "react";

const Page: React.FC = () => {
  const [search, setSearch] = useState('');
  const handleInput = (e: React.SyntheticEvent) => {
    const { value } = (e.target as HTMLInputElement);
    setSearch(value)
  }

    return (
        <>
          <h2 className="text-2xl font-medium">List Articles</h2>
          
          <div className="flex flex-row w-2/4 items-center gap-3 my-4">
            <Input
              name="Search"
              label={null}
              value={search}
              handleInput={handleInput}
              placeholder="Find articles"
            />
            <Button 
              label="Search article"
              addClass="btn-info capitalize"
            />
            <Button 
              label="Add article"
              addClass="btn-success capitalize"
            />
          </div>
          <Table 
            label=""
            headTable={headTableBlog}
          />
          
        </>
    );
};

export default Page;