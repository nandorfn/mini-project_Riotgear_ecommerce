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
            <div className="w-2/3">
              <Heading className=" line-clamp-1">{item.productName}</Heading>
              <p className="text-base-300">{`Rp${item.productPrice.toLocaleString('ID-id')}`}</p>
            </div>
            <div className="flex w-1/3 justify-end">
              <p className="xl:text-error xl:bg-red-200 xl:px-3 xl:rounded-full xl:font-medium">{`${item.viewsCount} views`}</p>
            </div>
          </Flex>
        </Flex>
      ))
      }
    </>
  );
};

export default ListCard;