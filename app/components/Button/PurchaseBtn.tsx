import wishlistIcon from '../../assets/icon/wishlist.svg'
import Image from "next/image";
import { Button } from './Button';

const PurchaseBtn: React.FC = () => {
  return (
    <>
      <div className="flex w-full justify-between flex-wrap gap-3 sticky sm:absolute sm:bottom-0">
        <Button variant={'red'} className='w-[70%]'>Buy Noy</Button>
        <Button className="w-[26%]">
          <Image
            src={wishlistIcon}
            alt="Wishlist Icon" />
        </Button>
      </div>
    </>
  );
};

export default PurchaseBtn;