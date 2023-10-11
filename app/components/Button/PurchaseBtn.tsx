import wishlistIcon from '../../assets/icon/wishlist.svg'
import Image from "next/image";
import { Button } from './Button';

const PurchaseBtn: React.FC = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-between gap-3 sticky sm:absolute sm:bottom-0">
        <Button variant={'red'} className='md:w-[70%]'>Add to cart</Button>
        <Button className="md:w-[26%]">
          <Image
            src={wishlistIcon}
            alt="Wishlist Icon" />
        </Button>
      </div>
    </>
  );
};

export default PurchaseBtn;