'use client'
import wishlistIcon from '../../assets/icon/wishlist.svg'
import Image from "next/image";
import { Button } from './Button';
import { useState } from 'react';
import CartModal from '../Modal/CartModal';
import { Heading } from '../Container/Heading';
import { quantityData } from '@/app/helpers/dataObject';

const PurchaseBtn: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState('1');

  return (
    <>
      <h4 className="font-medium text-xl">Quantity</h4>
      <select onChange={(e) => setQuantity(e.target.value)} className="px-4 py-2 rounded-md w-full max-w-[5.4rem]" name="selectQuantity">
        {quantityData?.map((data) =>
          <option key={data.id} value={data.value}>{data.label}</option>
        )}
      </select>
      
      <div className="flex flex-row w-full justify-between gap-3 sticky sm:absolute sm:bottom-0">
        <Button onClick={() => setModal(!modal)} variant={'red'} className='md:w-[70%]'>Add to cart</Button>
        <Button className="md:w-[26%]">
          <Image
            src={wishlistIcon}
            alt="Wishlist Icon" />
        </Button>
      </div>

      {modal &&
        <CartModal
          setModal={setModal}
          modal={modal}
          title="1 ITEMS ADDED TO YOUR CART"
          btnLeft="VIEW CHART"
          btnRight="CONTINUE SHOPPING">
          <Heading variant={'five'}>SUBTOTAL | </Heading>
          <Heading variant={'five'} bold={'normal'}>{`${quantity} item(s)`}</Heading>
        </CartModal>
      }
    </>
  );
};

export default PurchaseBtn;