'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/app/components/Button/Button";
import CartCard from "@/app/components/Card/CartCard";
import OrderCard from "@/app/components/Card/OrderCard";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";

import couponIcon from '@/app/assets/icon/coupon.svg'
import arrowRight from '@/app/assets/icon/arrow-right.svg'

interface ProductProps {
  products: {
    productInfo: any;
    id: number;
    userId: string;
    productId: string;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
  }[];
  user: void | {
    role: string;
    username: string;
    userId: string;
    iat: number;
    exp: number;
  }
}

const DataProducts: React.FC<ProductProps> = ({ products, user }) => {
  const [render, setRender] = useState(false);

  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [render])

  let subTotal = 0;
  products.forEach((product) => {
    const total = product.quantity * product.productInfo.productPrice;
    subTotal += total;
  })
  let tax = subTotal * 11 / 100;


  return (
    <>
      <Flex variant={'colToRow'} className="gap-10">
        <Flex variant={'col'} align={'between'} className="w-full md:w-2/3 gap-5">
          {products?.map(data => (
            <CartCard
              key={data.id}
              render={render}
              setRender={setRender}
              user={user}
              data={data} />
          ))
          }
        </Flex>

        <Flex variant={'col'} className="w-full md:w-1/3 gap-5">
          <OrderCard
            subTotal={subTotal}
            tax={tax}
            length={products.length}
          />

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
    </>
  );
};

export default DataProducts;