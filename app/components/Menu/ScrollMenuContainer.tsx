'use client'
import filterIcon from '../../assets/icon/list.svg'
import { useState } from "react";
import ScrollMenu from "./ScrollMenu";
import { Flex } from "../Container/Flex";
import { Button } from "../Button/Button";
import MenuFilter from "./MenuFillter";
import Image from 'next/image';

const ScrollMenuContainer: React.FC = () => {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setInput(!input);
  }
  const handleMenu = () => {
    setMenu(!menu);
  }
  const handleSearch = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  }

  return (
    <>
      <section className="flex ">
        <div className="mx-auto overflow-x-hidden">
          <Flex variant={'row'} className="whitespace-nowrap">
            <Flex align={'center'} className="max-w-[4em] ms-3 md:ms-0 md:hidden">
              <button className='bg-base-200 p-2 px-4 rounded-xl' onClick={handleMenu}>
                <Image
                  src={filterIcon}
                  alt='filter icon'
                  width={18}
                  height={18}
                />
              </button>
            </Flex>
            <Flex clr={'base2'} rounded={'full'} className="md:ms-3 my-[0.1rem] px-4 me-3 w-fit">
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
      {menu &&
        <div className='h-[100vh] md:hidden overflow-hidden'>
          <div className='w-96 h-[100vh] absolute z-50 top-[4.2rem]'>
            <MenuFilter />
          </div>
        </div>
      }
    </>
  );
};

export default ScrollMenuContainer;