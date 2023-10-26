import Skeleton from "react-loading-skeleton";
import { Flex } from "../Container/Flex";
import 'react-loading-skeleton/dist/skeleton.css'
import { Heading } from "../Container/Heading";

interface OrderCardSkeletonProps {
  variant: 'variant1' | 'variant2';
}

const OrderCardSkeleton: React.FC<OrderCardSkeletonProps> = ({ variant }) => {
  return (
    <>
      {variant === 'variant1'
        ? <Flex variant={'colToRow'} align={'between'} className="mb-4 gap-3 md:gap-0 md:mb-0">
          <Flex variant={'row'} className="md:w-2/3 gap-3">
            <Skeleton height={100} width={100} />
            <Flex variant={'col'}>
              <Skeleton height={20} count={3} />
            </Flex>
          </Flex>
        </Flex>
        : <Flex variant={'col'} className="border-[1px] rounded-xl shadow-sm gap-3 pb-4">
          <Flex className="gap-3 border-b py-2 px-5 rounded-t-xl bg-base-200">
            <Flex variant={'row'} align={'iCenter'} className="gap-3 w-3/4">
              <Skeleton height={20} />
              <Flex variant={'colToRow'} className="md:gap-3">
                <Skeleton height={20} />
                <Skeleton height={20} />
              </Flex>
            </Flex>
            <div className="w-1/4">
              <Skeleton height={20} />
            </div>
          </Flex>

          <Flex variant={'colToRow'} className="bg-base-100 md:pe-4">
            <Flex variant={'colToRow'} align={'between'} className="mb-4 gap-3 md:gap-0 md:mb-0">
              <Flex variant={'row'} className="md:w-2/3 ms-4 gap-3">
                <Skeleton height={100} width={100} />
                <Flex variant={'col'}>
                  <Skeleton height={20} count={3} width={160} containerClassName="flex-1" />
                </Flex>
              </Flex>
            </Flex>
            <Flex variant={'colToRow'} className="px-5 -mt-2 md:mt-0 md:px-0">
              <Flex variant={'col'}>
                <Heading>Billing Address</Heading>
                <Skeleton count={2} height={20} />
              </Flex>
              <div className="divider hidden md:block lg:divider-horizontal"></div>
              <Flex variant={'col'} className="gap-3 md:w-[50%] relative">
                <Heading>Subtotal</Heading>
                <Skeleton height={30} />
                <Skeleton height={20} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      }

    </>
  );
};

export default OrderCardSkeleton;