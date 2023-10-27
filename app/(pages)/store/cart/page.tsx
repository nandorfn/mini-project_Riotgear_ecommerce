import { cookies } from "next/headers";
import Link from "next/link";

import { JwtSchema } from "@/app/utils/types";
import { Heading } from "@/app/components/Container/Heading";
import { verifyAuth } from "@/app/utils/auth";
import { getUserProductCart } from "@/app/utils/queryDb";
import DataProducts from "./components/DataProducts";
import WrongCondition from "@/app/components/404/WrongCondition";

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
        {!user
          ?
          <WrongCondition
            text="You must logged in to acces product Cart"
            link="/login"
            labelBtn="LOGIN TO ACCESS CART"
          />
          :
          <DataProducts
            products={productCart}
          />
        }
      </main>
    </>
  );
};

export default Page;