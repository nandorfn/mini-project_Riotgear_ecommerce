import { Heading } from "@/app/components/Container/Heading";
import Link from "next/link";

const Page: React.FC = () => {
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
      </main>
        </>
    );
};

export default Page;