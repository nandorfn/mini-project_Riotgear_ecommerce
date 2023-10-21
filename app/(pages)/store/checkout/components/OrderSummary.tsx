import OrderCard from "@/app/components/Card/OrderCard";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { checkUserLogin } from "@/app/utils/auth";
import { getUserProductCart } from "@/app/utils/queryDb";
import { orderSummary } from "@/app/utils/utils";
import Image from "next/image";
import { redirect } from "next/navigation";

const OrderSummary: React.FC = async () => {
  const user = await checkUserLogin();
  const productCart = await getUserProductCart(user?.userId ?? '');
  let { subTotal, tax } = orderSummary(productCart);
  
  if (productCart.length === 0) redirect('/store')

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
    </>
  );
};

export default OrderSummary;