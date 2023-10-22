import Image from "next/image";
import { Flex } from "../Container/Flex";
import { Heading } from "../Container/Heading";
import { Text } from "../Container/Text";

type Props = {
  isAdmin: boolean;
  img?: string;
  name?: string;
  quantity: number;
  children?: React.ReactNode;
  price?: number;
  total?: number;
}

const HistoryOrderCard = ({
  img,
  isAdmin,
  name,
  quantity,
  children,
  price,
  total }: Props
) => {
  return (
    <>
      <Flex className="gap-3">
        <Image
          className="rounded-md hidden md:block"
          src={img ?? ''}
          width={100}
          height={100}
          alt="Product Image"
        />
        <Flex variant={'col'} align={'between'}>
          <div>
            <Heading>{name}</Heading>
            <p className="text-base-300">{`Quantity: ${quantity}`}</p>
            <p className="text-base-300">{`Rp${price?.toLocaleString('ID-id')}`}</p>
          </div>
          {children}
        </Flex>
        {!isAdmin &&
          <>
            <div className="divider divider-horizontal"></div>
            <Flex variant={'col'}>
              <Heading>Total</Heading>
              <Text fs={'lg'} bold={'medium'} className="text-error">{`Rp${total}`}</Text>
            </Flex>
          </>
        }
      </Flex>
    </>
  );
};

export default HistoryOrderCard;