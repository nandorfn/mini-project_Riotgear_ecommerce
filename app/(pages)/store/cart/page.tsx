import { cookies } from "next/headers";
import Link from "next/link";

import { JwtSchema } from "@/app/utils/types";
import { Heading } from "@/app/components/Container/Heading";
import { verifyAuth } from "@/app/utils/auth";
import { getUserProductCart } from "@/app/utils/queryDb";
import DataProducts from "./components/DataProducts";
import { Text } from "@/app/components/Container/Text";
import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";

const Page: React.FC = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const user: JwtSchema | undefined = token && (await verifyAuth(token.value))
  const productCart = await getUserProductCart(user?.userId ?? '');

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
        {productCart.length > 0
          ? <DataProducts
            products={productCart}
            user={user}
          />
          : <Flex variant={'col'} align={'center'} className="h-[60vh] gap-5">
            <Text fs={'xl'}>Your cart is currently empty.</Text>
            <Link href={'/store'}>
              <Button variant={'black'}>CONTINUE SHOPPING</Button>
            </Link>
          </Flex>

        }

      </main>
    </>
  );
};

export default Page;