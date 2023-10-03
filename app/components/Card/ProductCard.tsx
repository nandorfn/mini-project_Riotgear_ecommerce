import Image from 'next/image';
import Link from 'next/link';
import StarLogo from '../../assets/Star.svg'

interface Product {
  productImg: string,
  productId: string,
  productName: string,
  productPrice: number,
}

const ProductCard: React.FC<Product> = ({
  productImg,
  productId,
  productName,
  productPrice

}) => {
  const price = productPrice.toLocaleString('id-ID');
  return (
    <>
      <Link href={`/catalog/${productId}`}>
        <div className="card w-fit shadow-md bg-base-100 hover:bg-base-200 cursor-pointer">
          <figure>
            <Image 
              className='w-full'
              src={productImg} 
              alt="Jacket"
              width={500}
              height={500}
              />
          </figure>
          <div className="flex flex-col gap-3 p-3">
            <h2 className="card-title text-lg text-base-300 font-normal">{productName}</h2>
            <p className='font-medium text-base'>{`Rp${price}`}</p>
            <div className='flex items-center gap-2'>
              <Image
                className='w-6'
                src={StarLogo}
                alt='star logo'
              />
              <p className='text-zinc-500 font- text-sm'>4.0 (200 Reviews)</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;