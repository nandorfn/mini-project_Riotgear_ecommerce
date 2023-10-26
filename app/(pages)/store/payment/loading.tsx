import Link from "next/link";
import 'react-loading-skeleton/dist/skeleton.css'
import { Transparent } from "@/app/components/Container/Transparent";

export default function Loading() {

  return (
    <>
    <main className="px-3 md:h-[74vh]">
        <div className="text-base text-base-300 breadcrumbs">
          <ul>
            <li><Link href={'/'}>RIOTGEAR</Link></li>
            <li><Link href={'/store'}>Store</Link></li>
            <li><Link href={`/store/cart`}>Cart</Link></li>
            <li><Link href={`/store/checkout`}>Checkout</Link></li>
          </ul>
        </div>
        
        <Transparent opacity={'op30'} variant={'white'}>
        <span className="loading loading-spinner loading-lg"></span>
        </Transparent>
      </main>
  </>
  )
}