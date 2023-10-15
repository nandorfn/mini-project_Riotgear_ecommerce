import Image from "next/image";
import { Heading } from "../Container/Heading";
import { Text } from "../Container/Text";
import closeIcon from '../../assets/icon/closeIcon.svg'

const CartCard = ({ data }: { data: any }) => {
  return (
    <>
      <article className="flex flex-row relative gap-5">
        <Image
          className="absolute end-0 top-0"
          width={20}
          height={20}
          src={closeIcon} alt="close icon" />
        <figure className="w-1/3">
          <Image
            className="rounded-md md:rounded-lg"
            width={253}
            height={190}
            src={data.productInfo.productImgLink} alt="product image" />
        </figure>
        <div className="w-2/3 max-w-md">
          <Heading>{data.productInfo.productName}</Heading>
          <Text className="capitalize">{`Color: ${data.productInfo.productColor}`}</Text>
          <Text className="uppercase">{`Size: ${data.productInfo.productSize}`}</Text>

          <div>
            <Heading>{data.productInfo.productPrice}</Heading>
          </div>
        </div>
      </article>
    </>
  );
};

export default CartCard;