import { Heading } from "@/app/components/Container/Heading";
import Link from "next/link";
import CheckoutBody from "./components/CheckoutBody";
import OrderSummary from "./components/OrderSummary";
import { checkUserLogin } from "@/app/utils/auth";
import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import { Text } from "@/app/components/Container/Text";

const Page: React.FC = async () => {
  const user = await checkUserLogin();

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

        <Heading variant={'fourthRwd'} className=" mb-5 md:mb-10">CHECKOUT</Heading>
        {!user
          ? <Flex variant={'col'} className="h-[60vh] gap-5" align={'center'}>
              <Text fs={'xl'}>You must Login</Text>
              <Link href={'/login'}>
                <Button size={'wide'}>Login</Button>
              </Link>
            </Flex>
          : <CheckoutBody userId={user.userId}>
              <OrderSummary />
            </CheckoutBody>
        }

      </main>
    </>
  );
};

export default Page;