import Link from "next/link";
import { Heading } from "@/app/components/Container/Heading";
import CheckoutBody from "./components/CheckoutBody";
import OrderSummary from "./components/OrderSummary";
import { checkUserLogin } from "@/app/utils/auth";
import WrongCondition from "@/app/components/404/WrongCondition";

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
          ? <WrongCondition
          text={'You must be logged in, to access this route'}
          link={'/login'}
          labelBtn={'LOGIN TO ACCESS'}
          />
          : <CheckoutBody userId={user.userId}>
              <OrderSummary />
            </CheckoutBody>
        }

      </main>
    </>
  );
};

export default Page;