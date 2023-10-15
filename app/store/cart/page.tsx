import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { verifyAuth } from "@/app/utils/auth";
import { getUserProductCart } from "@/app/utils/queryDb";
import { JwtSchema } from "@/app/utils/types";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import couponIcon from '../../assets/icon/coupon.svg'
import arrowRight from '../../assets/icon/arrow-right.svg'
import { Button } from "@/app/components/Button/Button";
import CartCard from "@/app/components/Card/CartCard";

const page: React.FC = async () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token');
  const user: JwtSchema | void =
    token &&
    (await verifyAuth(token.value).catch((err) => {
      console.log(err);
    }))

  const productCart = await getUserProductCart(user?.userId ?? '');



  let subTotal = 0;
  productCart.forEach((product) => {
    const total = product.quantity * product.productInfo.productPrice;
    subTotal += total;
  })
  let tax = subTotal * 11 / 100;

  return (
    <>
      <main className="px-3">
        <div className="text-base text-base-300 breadcrumbs">
          <ul>
            <li><Link href={'/'}>RIOTGEAR</Link></li>
            <li><Link href={'/store'}>Store</Link></li>
            <li><Link href={`/store/cart`}>Cart</Link></li>
          </ul>
        </div>

        <Heading variant={'fourthRwd'} className=" mb-5 md:mb-10">SHOPPING CART</Heading>

        <Flex variant={'colToRow'} className="gap-10">
          <Flex variant={'col'} align={'between'} className="w-full md:w-2/3 gap-5">
            {productCart?.map(data => (
              <CartCard key={data.id} data={data} />
            ))
            }
          </Flex>

          <Flex variant={'col'} className="w-full md:w-1/3 gap-5">
            <Flex variant={'col'} className="bg-accent px-3 py-5 gap-4 rounded-lg h-fit">
              <Flex variant={'col'} className="px-2 gap-4">
                <Heading>{`ORDER SUMMARY | ${productCart.length} ITEM(S)`}</Heading>
                <div className="flex w-full justify-between">
                  <p>Item(s) subtotal</p>
                  <p>{`Rp${subTotal.toLocaleString('ID-id')}`}</p>
                </div>
                <div className="flex w-full justify-between font-medium">
                  <p>SUBTOTAL</p>
                  <p>{`Rp${subTotal.toLocaleString('ID-id')}`}</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>VAT included (11%)</p>
                  <p>{`Rp${tax.toLocaleString('ID-id')}`}</p>
                </div>
              </Flex>
              <div className="flex w-full justify-between font-medium bg-white py-2 px-2  rounded-lg">
                <p>ORDER TOTAL</p>
                <p>{`Rp${subTotal.toLocaleString('ID-id')}`}</p>
              </div>
            </Flex>

            <Flex align={'between'} className="border-y-2 py-2 justify-between cursor-pointer">
              <figure className="flex items-center gap-3">
                <Image width={24} src={couponIcon} alt="coupon icon" />
                <p>Coupon</p>
              </figure>
              <Image width={20} src={arrowRight} alt="arrow icon" />
            </Flex>

            <Flex variant={'col'}>
              <Heading>TERMS OF USE</Heading>
              <p>By clicking the checkout button you agree to our terms and conditions</p>
            </Flex>

            <Flex variant={'col'} className="gap-3">
              <Button variant={'red'} size={'full'} className="text-white">CHECKOUT</Button>
              <Link href={'/store'}>
                <Button variant={'white'} size={'full'}>CONTINUE SHOPPING</Button>
              </Link>
            </Flex>
          </Flex>

        </Flex>
      </main>
    </>
  );
};

export default page;