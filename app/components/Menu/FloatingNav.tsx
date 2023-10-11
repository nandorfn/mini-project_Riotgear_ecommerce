import Image from "next/image";
import { Button } from "../Button/Button";
import wishlistIcon from '../../assets/icon/wishlist.svg'

const FloatingNav: React.FC = () => {
  return (
    <>
      <div className="flex w-screen bg-white py-4">
        <div className="px-4 flex w-full justify-between">
          <Button variant={'red'} className='w-[70%]'>Buy Noy</Button>
          <Button className="w-[26%]">
            <Image
              src={wishlistIcon}
              alt="Wishlist Icon" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default FloatingNav;