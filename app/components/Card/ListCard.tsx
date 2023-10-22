import Image from "next/image";
import { Flex } from "../Container/Flex";
import { Heading } from "../Container/Heading";

const ListCard = ({data}: {data: any}) => {
  return (
    <>
      {data?.map((item: any) => (
        <Flex className="gap-3 border-b pb-2" key={item.id}>
          <Image
            src={item.productImgLink}
            width={50}
            height={50}
            alt="Product Image"
          />
          <Flex variant={'row'} align={'between'} className="items-center">
            <div>
              <Heading>{item.productName}</Heading>
              <p className="text-base-300">{`Rp${item.productPrice.toLocaleString('ID-id')}`}</p>
            </div>
            <p className="text-error bg-red-200 px-3 rounded-full font-medium">{`${item.viewsCount} views`}</p>
          </Flex>
        </Flex>
      ))
      }
    </>
  );
};

export default ListCard;