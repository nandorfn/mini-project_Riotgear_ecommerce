'use client'
import Image from "next/image";
import { Button } from "../Button/Button";
import wishlistIcon from '../../assets/icon/wishlist.svg'
import Link from "next/link";
import { PurchaseBtn } from "../Button/PurchaseBtn";
import useAddCart from "@/app/hooks/useAddCart";
import CartModal from "../Modal/CartModal";
import { Heading } from "../Container/Heading";

const FloatingNav =  ({stock, id, user}: PurchaseBtn) => {
  const {
    quantity,
    handlePostCart,
    modal,
    setModal,
    handleNavigate } = useAddCart({ user, id, stock })

  return (
    <>
      <div className="flex w-screen bg-white py-4">
        {!user
          ? <Link className="flex w-full mx-4" href={'/login'}>
              <Button variant={'red'} className="text-white" size={'full'}>LOGIN TO CHECKOUT</Button>
            </Link>
          : <div className="px-4 flex w-full justify-between">
            <Button onClick={handlePostCart} variant={'red'} className='w-[70%]'>Add to cart</Button>
            <Button className="w-[26%]">
              <Image
                src={wishlistIcon}
                alt="Wishlist Icon" />
            </Button>
          </div>
        }
      </div>
      
      {modal &&
        <CartModal
          setModal={setModal}
          modal={modal}
          title="1 ITEMS ADDED TO YOUR CART"
          btnLeft="VIEW CHART"
          action={handleNavigate}
          btnRight="CONTINUE SHOPPING">
          <Heading variant={'five'}>SUBTOTAL | </Heading>
          <Heading variant={'five'} bold={'normal'}>{`${quantity} item(s)`}</Heading>
        </CartModal>
      }
    </>
  );
};

export default FloatingNav;