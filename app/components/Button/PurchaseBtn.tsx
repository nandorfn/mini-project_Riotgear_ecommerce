'use client'
import wishlistIcon from '@/app/assets/icon/wishlist.svg'
import Image from "next/image";
import { Button } from './Button';
import CartModal from '@/app/components/Modal/CartModal';
import { Heading } from '@/app/components/Container/Heading';
import useAddCart from '@/app/hooks/useAddCart';

export type PurchaseBtn = {
  user?: any
  id?: string | null
  stock: number | undefined
}

const PurchaseBtn = ({ user, id, stock }: PurchaseBtn) => {
  const {
    quantity,
    setQuantity,
    options,
    loading,
    handlePostCart,
    modal,
    setModal,
    handleNavigate } = useAddCart({ user, id, stock })

  return (
    <>
      {stock === 0
        ? <Heading>Out Of Stock</Heading>
        :
        <>
          <h4 className="font-medium text-xl">Quantity</h4>
          <select onChange={(e) => setQuantity(e.target.value)} className="px-4 py-2 rounded-md w-full max-w-[5.4rem]" name="selectQuantity">
            {options?.map((data) =>
              <option key={data} value={data}>{data}</option>
            )}
          </select>
          <div className="flex flex-row w-full justify-between gap-3 sticky sm:absolute sm:bottom-0">
            <Button disabled={loading} onClick={handlePostCart} variant={'red'} className='md:w-[70%]'>Add to cart</Button>
            <Button className="md:w-[26%]">
              <Image
                src={wishlistIcon}
                alt="Wishlist Icon" />
            </Button>
          </div>
        </>
      }

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

export default PurchaseBtn;