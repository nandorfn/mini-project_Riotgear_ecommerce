'use client'
import Link from "next/link";
import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { scrollMenuLabel } from "@/app/data/faqData";

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
        {scrollMenuLabel?.map((item, index) =>
          <li className='inline-block' key={index}>
            <Link
              href={pathname + '?' + createQueryString('category', item.label)}
              className={`bg-base-200 py-2 px-4 hover:bg-neutral-content rounded-full ${activeCategory === item.label && 'border-2 bg-white'}`}>{item.label}
            </Link>
          </li>
        )}
      </ul>

    </>
  );
};

export default ScrollMenu;