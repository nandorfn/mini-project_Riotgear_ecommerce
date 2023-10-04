'use client'
import Image from "next/image";
import filterIcon from '../../assets/icon/list.svg'
import OptionInput from "../Form/Option";
import { genderOption, priceRange, sizeChart, sortByOptions } from "@/app/data/faqData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Checkbox from "../Form/Checkbox";
import ColorChart from "../Filter/ColorChart";
import { useCallback, useEffect, useState } from "react";
import List from "../List";
import { Button } from "../Button/Button";



const MenuFilter: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const [queryExist, setQueryExist] = useState(false)
  const sortBy = searchParams.get('sort')
  const price = searchParams.get('priceRanges')
  const color = searchParams.get('color')
  const gender = searchParams.get('gender')
  const sizes = searchParams.get('size')
  const category = searchParams.get('category')

  useEffect(() => {
    if (category !== null) {
      setQueryExist(true);
    } else {
      setQueryExist(false);
    }
  }, [category]);
  
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      setQueryExist(true)
      return params.toString()
    },
    [searchParams]
  )

  const handleInput = (e: React.SyntheticEvent) => {
    const { name, value } = (e.target as HTMLInputElement)
    router.push(pathname + `?` + createQueryString(name, value))
  }

  const handleClick = (e: React.SyntheticEvent) => {
    const { name, value } = (e.target as HTMLButtonElement)
    router.push(pathname + `?` + createQueryString(name, value))
  }

  const deleteUrlState = () => {
    router.push(pathname);
    setQueryExist(false)
  }

  return (
    <>
      <aside className="flex flex-col w-full bg-base-200 h-fit rounded-xl gap-3 p-3">
        <figure className="flex gap-3 justify-between">
          <div className="flex gap-3 items-center">
            <Image src={filterIcon} alt="Filter icon" />
            <h1>Filter</h1>
          </div>
          {queryExist &&
            <Button onClick={deleteUrlState} className="capitalize font-medium" variant={'zinc'} size={'sm'}>Clear Filter</Button>
          }
        </figure>
        <OptionInput
          name="sort"
          label="Sort By"
          addClass="select-sm mt-3"
          value={sortBy}
          optionValue={sortByOptions}
          handleInput={handleInput}
        />

        <label>
          Gender
          <Checkbox
            value={gender}
            handleInput={handleInput}
            data={genderOption}
            addClass="flex flex-col gap-2 mt-3"
          />
        </label>
        <List
          data={sizeChart}
          renderItem={(size) => {
            const { key, value } = size;
            const isSelected = key === sizes;
            return (
              <Button
                onClick={(e) => handleClick(e)}
                name={'size'}
                value={key}
                variant={isSelected ? 'checked' : 'zinc'}>{value}
              </Button>
            )
          }}
        />
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