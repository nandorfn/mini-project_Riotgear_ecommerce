'use client'
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from "react";

import ScrollMenu from "./ScrollMenu";
import MenuFilter from "./MenuFillter";
import filterIcon from '@/app/assets/icon/list.svg';
import { Flex } from "@/app/components/Container/Flex";
import closeIcon from '@/app/assets/icon/closeIcon.svg';

const ScrollMenuContainer: React.FC = () => {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState(false);
  const [menu, setMenu] = useState(false);
  const storePath = usePathname();

  const handleClick = () => {
    setInput(!input);
    if (search !== '') {
      router.push(`?search=${search}`);
      setSearch('');
    }
  }
  const handleMenu = () => {
    setMenu(!menu);
  }
  const router = useRouter()
  const handleSearch = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  }
  const filter = menu ? closeIcon : filterIcon;
  return (
    <>
      <section className="flex relative">
        <div className="mx-auto overflow-x-hidden">
          <Flex variant={'row'} className="whitespace-nowrap gap-3">
            {storePath === '/store' && input === false &&
              <Flex align={'center'} className="max-w-[4em] md:ms-0 md:hidden">
                <button className={`p-[0.4rem] px-4 rounded-xl ${menu ? 'bg-accent' : 'bg-base-200'}`} onClick={handleMenu}>
                  <Image
                    src={filter}
                    alt='filter icon'
                    width={18}
                    height={18}
                  />
                </button>

              </Flex>
            }
            <Flex clr={'base2'} rounded={'full'} className="my-[0.1rem] px-4 w-fit">
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