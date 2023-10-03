'use client'
import Image from "next/image";
import filterIcon from '../../assets/icon/list.svg'
import OptionInput from "../Form/Option";
import { genderOption, priceRange, sizeChart, sortByOptions } from "@/app/data/faqData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Checkbox from "../Form/Checkbox";
import { Button } from "../Button/Button";
import ColorChart from "../Filter/ColorChart";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import List from "../List";



const MenuFilter: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const sortBy = searchParams.get('sort')
  const price = searchParams.get('priceRanges')
  const color = searchParams.get('color')


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  
  const handleInput = (e: React.SyntheticEvent) => {
    const { name, value } = (e.target as HTMLInputElement)
    router.push(pathname + `?` + createQueryString(name, value))
  }

  return (
    <>
      <aside className="flex flex-col w-full bg-base-200 h-screen rounded-xl gap-3 p-3">
        <figure className="flex gap-3">
          <Image src={filterIcon} alt="Filter icon" />
          <h1>Filter</h1>
        </figure>
        <OptionInput
          name="sort"
          label="Sort By"
          addClass="select-sm"
          value={sortBy}
          optionValue={sortByOptions}
          handleInput={handleInput}
        />

      {/* <label>
          Gender
          <Checkbox
            data={genderOption}
            addClass="flex flex-col gap-2"
          />
        </label> */}
        {/* <List
          data={sizeChart}
          renderItem={(size) => (
            <Button variant={'zinc'}>{size}</Button>
          )}
        /> */}
        <ColorChart 
          value={color}
          handleInput={handleInput}
        />
        <label>
          Price
          <Checkbox
            data={priceRange}
            addClass="flex flex-col gap-2"
            handleInput={handleInput}
            value={price}
          />
        </label>

    </aside >
    </>
  );
};

export default MenuFilter;