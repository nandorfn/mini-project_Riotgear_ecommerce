import Skeleton from "react-loading-skeleton";
import { Flex } from "./Flex";
import 'react-loading-skeleton/dist/skeleton.css'

const ProductCardSkeleton: React.FC = () => {
  return (
    <>
      <article>
        <div className="card w-[98%] h-full shadow-sm bg-zinc-100">
          <figure className='h-[60%]'>
            <Skeleton height={238} containerClassName="flex-1" />
          </figure>
          <Flex variant={'col'} gap={3} className="p-3 h-[40%]">
            <Skeleton height={30} containerClassName="flex-1" />
            <Flex
              variant={'col'}
              gap={3}>
              <Skeleton width={70} height={20} />
              <Flex align={'iCenter'} gap={2}>
                <Skeleton height={20} containerClassName="flex-1" />
              </Flex>
            </Flex>
          </Flex>
        </div>
      </article>
    </>
  );
};

export default ProductCardSkeleton;