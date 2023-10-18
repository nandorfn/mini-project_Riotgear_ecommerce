import { Button } from "@/app/components/Button/Button";
import OrderCard from "@/app/components/Card/OrderCard";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";
import { paymentOption } from "@/app/helpers/dataObject";
import { checkUserLogin } from "@/app/utils/auth";
import { getUserProductCart } from "@/app/utils/queryDb";
import { orderSummary } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";

const OrderSummary: React.FC = async () => {
  const user = await checkUserLogin();
  const productCart = await getUserProductCart(user?.userId ?? '');
  let { subTotal, tax } = orderSummary(productCart);

  return (
    <>
      <OrderCard
        length={productCart.length}
        subTotal={subTotal}
        tax={tax}
      />
      <Flex variant={'col'}>
        <Heading className="border-t-2 flex w-full pt-5">ORDER ITEMS</Heading>
        <div className="grid grid-cols-5 mt-5 gap-3">
          {productCart?.map((product) => (
            <figure key={product.id}>
              <Image
                className="rounded-md"
                width={122}
                height={144}
                src={product.productInfo.productImgLink}
                alt="Product Image"
              />
              <span className="flex justify-end">{`x${product.quantity}`}</span>
            </figure>
          ))
        }
        </div>
      </Flex>
      
      <Flex variant={'col'}>
        <Heading className="border-t-2 flex w-full pt-5">PAYMENT METHOD</Heading>
          <Flex variant={'col'} className="gap-[10px] mt-5">
            {paymentOption.map((option) => (
              <div key={option.id} className="flex flex-row gap-3 bg-base-200 p-3 rounded-lg items-center">
                <input type="radio" name="radio-1" value={option.value} className="radio radio-sm rounded-md" />
                <Text>{option.label}</Text>
              </div>
            ))
            }
          </Flex>
      </Flex>
      
      <Flex variant={'row'} className="gap-5">
        <Link className="flex w-[48.5%]" href={'/store'}>
          <Button size={'full'} variant={'white'}>BACK TO STORE</Button>
        </Link>
        <Button size={'half'} variant={'red'}>ORDER</Button>
      </Flex>
    </>
  );
};

export default OrderSummary;