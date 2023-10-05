'use client'
import { useState } from "react";
import ScrollMenu from "./ScrollMenu";
import { Flex } from "../Container/Flex";

const ScrollMenuContainer: React.FC = () => {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState(false);
  
  const handleClick = () => {
    setInput(!input);
  }
  const handleSearch = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  }

  return (
    <>
      <section className="flex">
        <div className="mx-auto overflow-x-hidden">
          <Flex variant={'row'} className="whitespace-nowrap">
            <Flex clr={'base2'} rounded={'full'} className="ms-3 px-4 me-3 w-fit">
              {input &&
                <input
                  className="me-2 rounded-full focus:outline-none ps-2 border-2"
                  name="searchQuery"
                  placeholder="Search..."
                  onChange={(e) => handleSearch(e)}
                  value={search}
                />
              }
              <button onClick={handleClick}>Search</button>
            </Flex>
            <ScrollMenu />
          </Flex>
        </div>
      </section>
    </>
  );
};

export default ScrollMenuContainer;