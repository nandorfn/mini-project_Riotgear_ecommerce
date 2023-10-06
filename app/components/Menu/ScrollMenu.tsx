'use client'
import Link from "next/link";
import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { subCategory } from "@/app/helpers/dataObject";

const ScrollMenu: React.FC = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const activeCategory = searchParams.get('category')

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )


  return (
    <>
      <ul className="flex gap-3 text-sm breadcrumbs relative ">
        {subCategory?.slice(1).map((item, index) => {
          const url = pathname + '?' + createQueryString('category', item.value)
        return (
          <li className='inline-block' key={index}>
            <Link
              href={pathname === '/' ? `/store/${url}` : url}
              className={`bg-base-200 py-3 px-4 hover:bg-neutral-content rounded-full ${activeCategory === item.label && 'border-2 bg-white'}`}>{item.label}
            </Link>
          </li>
        )})}
      </ul>

    </>
  );
};

export default ScrollMenu;