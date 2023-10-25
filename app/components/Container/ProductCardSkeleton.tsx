import Skeleton from "react-loading-skeleton";
import { Flex } from "./Flex";

const ProductCardSkeleton: React.FC = () => {
  return (
    <>
      <article>
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
    </>
  );
};

export default ProductCardSkeleton;