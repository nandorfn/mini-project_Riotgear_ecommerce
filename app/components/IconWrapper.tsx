import Image from "next/image";
import Link from "next/link";
import CartIcon from '../assets/icon/cart.svg'
import WishlistIcon from '../assets/icon/wishlist.svg'
import Avatar from "./Avatar";

const IconWrapper: React.FC = () => {
  return (
    <>
      <figure className="flex items-center gap-2 bg-base-100 rounded-md justify-between pe-6 my-4 mb-8">
        <Avatar />
        <div className="flex gap-3">
          <Link href={'/'}>
            <Image src={CartIcon} alt="Cart Icon" />
          </Link>
          <Link href={'/'}>
            <Image src={WishlistIcon} alt="Wishlist Icon" />
          </Link>
        </div>
      </figure>
    </>
  );
};

export default IconWrapper;