'use client'
import Image from "next/image";
import filterIcon from '../../assets/icon/list.svg'
import OptionInput from "../Form/Option";
import { genderOption, sizeChart, sortBy } from "@/app/data/faqData";
import { useRouter, useSearchParams } from "next/navigation";
import Checkbox from "../Form/Checkbox";
import SizeChart from "../List";
import { Button } from "../Button/Button";
import List from "../List";

const MenuFilter: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedSortBy = searchParams.get('sort');
  const handleFilter = (e: React.SyntheticEvent) => {
    const { value } = (e.target as HTMLSelectElement)
    router.push(`?sort=${value}`);
  }

  return (
    <>
      <aside className="flex flex-col w-full bg-base-200 h-screen rounded-xl gap-3 p-3">
        <figure className="flex gap-3">
          <Image src={filterIcon} alt="Filter icon" />
          <h1>Filter</h1>
        </figure>
        <OptionInput
          name="sortByOptions"
          label="Sort By"
          addClass="select-sm"
          optionValue={sortBy}
          value={selectedSortBy}
          handleInput={handleFilter}
        />

        <label>
          Gender
          <Checkbox
            data={genderOption}
            addClass="flex flex-col gap-2"
          />
        </label>
        <List
          data={sizeChart}
          renderItem={(size) => (
            <Button variant={'zinc'}>{size}</Button>
          )}
        />

      </aside>
    </>
  );
};

export default MenuFilter;