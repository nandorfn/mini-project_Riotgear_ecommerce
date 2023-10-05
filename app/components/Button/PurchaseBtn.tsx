import wishlistIcon from '../../assets/icon/wishlist.svg'
import Image from "next/image";

const PurchaseBtn: React.FC = () => {
  return (
    <>
      <div className="flex w-full justify-between flex-wrap gap-3 sticky sm:absolute sm:bottom-0">
        <button className={`btn btn-error capitalize w-[70%] text-white`}>Buy Now</button>
        <button className="btn w-[26%]">
          <Image
            src={wishlistIcon}
            alt="Wishlist Icon" />
        </button>
      </div>
    </>
  );
};

export default PurchaseBtn;