import Image from "next/image";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";

type Props = {
  img?: string;
  name?: string;
  quantity: number;
  children?: React.ReactNode;
  price?: number;
  total?: number;
  collapse?: any;
  collapseAdmin?: any;
  isAdmin?: boolean;
}

const HistoryOrderCard = ({
  img,
  name,
  quantity,
  children,
  price,
  collapseAdmin,
  isAdmin,
  collapse }: Props
) => {
  return (
    <>
      <Flex variant={'colToRow'} align={'between'} className="mb-4 gap-3 md:gap-0 md:mb-0">
        <Flex variant={'row'} className="md:w-2/3 gap-3">
          <Image
            className="rounded-md"
            src={img ?? ''}
            width={100}
            height={100}
            alt="Product Image"
            />
          <Flex variant={'col'}>
            <Heading className="line-clamp-2">{name}</Heading>
            <p className="text-base-300">{`Quantity: ${quantity}`}</p>
            <p className="text-base-300">{`Rp${price?.toLocaleString('ID-id')}`}</p>
            {collapseAdmin}
          </Flex>
        </Flex>
        <div className="hiddedn md:divider md:divider-horizontal"></div>
        {!isAdmin &&         
        <div className="h-1/2 w-1/3">
          {children}
        </div>
        }
      </Flex>
      {collapse}
    </>
  );
};

export default HistoryOrderCard;