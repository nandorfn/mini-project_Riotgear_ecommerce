import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { verifyAuth } from "@/app/utils/auth";
import { getUserProductCart } from "@/app/utils/queryDb";
import { JwtSchema } from "@/app/utils/types";
import { cookies } from "next/headers";
import Link from "next/link";

const page: React.FC = async () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token');
  const user: JwtSchema | void =
    token &&
    (await verifyAuth(token.value).catch((err) => {
      console.log(err);
    }))

  if (user) {
    const productCart = await getUserProductCart(user.userId)
    console.log(productCart);
  }

  return (
    <>
      <main className="px-3">
        <div className="text-base breadcrumbs">
          <ul>
            <li><Link href={'/'}>RIOTGEAR</Link></li>
            <li><Link href={'/store'}>Store</Link></li>
            <li><Link href={`/store/cart`}>Cart</Link></li>
          </ul>
        </div>

        <Heading variant={'fourth'}>SHOPPING CART</Heading>

        <Flex>

        </Flex>
      </main>
    </>
  );
};

export default page;