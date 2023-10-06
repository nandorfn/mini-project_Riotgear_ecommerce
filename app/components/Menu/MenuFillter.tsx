'use client'
import Image from "next/image";
import filterIcon from '../../assets/icon/list.svg'
import OptionInput from "../Form/Option";
import { genderOption, priceRange, sizeChart, sortByOptions } from "@/app/helpers/dataObject";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Checkbox from "../Form/Checkbox";
import ColorChart from "../Filter/ColorChart";
import { useCallback, useEffect, useState } from "react";
import List from "../List";
import { Button } from "../Button/Button";
import { Flex } from "../Container/Flex";



const MenuFilter: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const sortBy = searchParams.get('sort')
  const price = searchParams.get('priceRanges')
  const color = searchParams.get('color')
  const gender = searchParams.get('gender')
  const sizes = searchParams.get('size')

  const paramsToCheck = ['sort', 'priceRanges', 'color', 'gender', 'size', 'category'];
  const hasQueryString = paramsToCheck.some(param => searchParams.get(param) !== null);
  const [queryExist, setQueryExist] = useState(hasQueryString)
  
  useEffect(() => {
    setQueryExist(hasQueryString);
  }, [hasQueryString]);
  
  
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
      <aside className="flex flex-col w-full bg-base-200 h-fit rounded-r-xl md:rounded-xl gap-3 p-4 md:p-3">
        <figure className="flex gap-3 justify-between">
          <Flex className="gap-3" align={'iCenter'}>
            <Image src={filterIcon} alt="Filter icon" />
            <h1>Filter</h1>
          </Flex>
          {queryExist &&
            <Button 
              onClick={deleteUrlState} 
              variant={'zinc'} 
              size={'sm'}
              font={'med'}>Clear Filter
            </Button>
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
            const { label, value } = size;
            const isSelected = value === sizes;
            return (
              <Button
                onClick={(e) => handleClick(e)}
                name={'size'}
                value={value}
                size={'sm'}
                font={'normal'}
                variant={isSelected ? 'checked' : 'zinc'}>{label}
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