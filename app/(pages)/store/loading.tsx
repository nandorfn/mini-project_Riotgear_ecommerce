import Skeleton from "react-loading-skeleton";
import { Flex } from "@/app/components/Container/Flex";
import MenuFilter from "@/app/components/Menu/MenuFillter";
import ScrollMenuContainer from "@/app/components/Menu/ScrollMenuContainer";
import 'react-loading-skeleton/dist/skeleton.css'


export default function Loading() {
  const data = []
  for (let i = 0; i <= 11; i++) {
    data.push(i)
  }

  return (
    <>
      <Flex variant={'row'} className="md:px-4 gap-5">
        <div className="w-[27.6%] mt-5 hidden md:block overflow-hidden">
          <MenuFilter />
        </div>
        <div className="w-full relative px-3 md:px-0 mt-3 md:mt-0 md:w-[73.4%]">
          <div className="sticky top-12 md:top-16 py-2 md:py-4 z-30 bg-white">
            <ScrollMenuContainer />
          </div>
          <section className="grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 md:mt-3 overflow-y-scroll">
            {data.map((item) => (
              <article key={item}>
                <div className="card w-[98%] h-64 shadow-sm bg-zinc-100">
                  <figure className='h-[60%]'>
                    <Skeleton height={160} containerClassName="flex-1" />
                  </figure>
                  <Flex variant={'col'} gap={3} className="p-3 h-[40%]">
                    <Skeleton height={30} containerClassName="flex-1" />
                    <Flex
                      variant={'col'}
                      gap={3}>
                      <Skeleton width={70} />
                      <Flex align={'iCenter'} gap={2}>
                        <Skeleton height={10} containerClassName="flex-1" />
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
              </article>
            ))
            }
          </section>
        </div>
      </Flex>
    </>
  )
}