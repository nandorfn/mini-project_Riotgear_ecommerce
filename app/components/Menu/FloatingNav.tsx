import Image from "next/image";
import { Button } from "../Button/Button";
import wishlistIcon from '../../assets/icon/wishlist.svg'
import { checkUserLogin } from "@/app/utils/auth";
import Link from "next/link";

const FloatingNav: React.FC = async () => {
  const userAccess = await checkUserLogin();

  return (
    <>
      <div className="flex w-screen bg-white py-4">
        {!userAccess
          ? <Link className="flex w-full mx-4" href={'/login'}>
              <Button variant={'red'} className="text-white" size={'full'}>LOGIN TO CHECKOUT</Button>
            </Link>
          : <div className="px-4 flex w-full justify-between">
            <Button variant={'red'} className='w-[70%]'>Buy Noy</Button>
            <Button className="w-[26%]">
              <Image
                src={wishlistIcon}
                alt="Wishlist Icon" />
            </Button>
          </div>
        }

      </div>
    </>
  );
};

export default FloatingNav;