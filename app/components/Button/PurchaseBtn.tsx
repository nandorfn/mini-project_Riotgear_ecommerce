import wishlistIcon from '../../assets/icon/wishlist.svg'
import Image from "next/image";

const PurchaseBtn: React.FC = () => {
  return (
    <>
      <div className="flex w-full gap-3 sticky sm:absolute sm:bottom-0">
        <button className={`btn btn-error capitalize w-2/3 text-white`}>Buy Now</button>
        <button className="btn w-1/3">
          <Image
            src={wishlistIcon}
            alt="Wishlist Icon" />
        </button>
      </div>
    </>
  );
};

export default PurchaseBtn;