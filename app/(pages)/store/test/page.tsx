import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import MenuFilter from "@/app/components/Menu/MenuFillter";
import ScrollMenuContainer from "@/app/components/Menu/ScrollMenuContainer";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


const page: React.FC = () => {
  const data: number[] = []
  for (let i = 0; i <= 2; i++) {
    data.push(i)
  }

  return (
    <>
      <main className="px-3 flex flex-col mx-auto">
        <div className="text-base breadcrumbs">
          <ul>
            <li><Link href={'/'}>RIOTGEAR</Link></li>
            <li><Link href={'/store'}>Store</Link></li>
          </ul>
        </div>

        <figure className="flex flex-col md:flex-row justify-between w-full gap-6">
          <div className="w-full md:w-4/6">
            <Skeleton height={500} />
          </div>
          <article className="md:w-2/6 sm:flex flex-col justify-between gap-3 relative bg-zinc-100 p-5">
            <Skeleton count={3} height={40}  />
            <Flex variant={'row'} align={'between'}>
              <Skeleton height={40} containerClassName="flex-1"  />
              <Skeleton height={40} containerClassName="flex-1"  />
            </Flex>
          </article>
        </figure>

        <div className="w-full md:mt-3">
          <Heading variant={'five'}>Description</Heading>
          <Skeleton height={200} containerClassName="flex-1" />
        </div>
        <div className="flex flex-col breadcrumbs gap-3">
          <Heading variant={'five'}>Reviews</Heading>
          <Skeleton height={20} width={100} />
          <Skeleton width={206} height={112} count={4} style={{ marginRight: '20px'}} inline />
        </div>
      </main>
    </>
  );
};

export default page;