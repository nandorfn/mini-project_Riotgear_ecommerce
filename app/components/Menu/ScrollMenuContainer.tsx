'use client'
import { useState } from "react";
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
            <div className="flex ms-3 px-4 bg-base-200 rounded-full me-3">
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
            </div>
            <ScrollMenu />
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollMenuContainer;