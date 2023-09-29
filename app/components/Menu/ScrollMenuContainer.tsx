'use client'
import { useState } from "react";
import Input from "../Form/Input";
import ScrollMenu from "./ScrollMenu";

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
          <div className="flex flex-row whitespace-nowrap">
            <div className="flex px-4 bg-base-200 rounded-full me-3">
              <button onClick={handleClick}>Cari</button>
              {input &&
                <input
                  className="ms-2 border-2 rounded-e-full"
                  name="searchQuery"
                  placeholder="Search..."
                  onChange={(e) => handleSearch(e)}
                  value={search}
                />
              }
            </div>
            <ScrollMenu />
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollMenuContainer;