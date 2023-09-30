import Image from 'next/image';
import Link from 'next/link';
import ProductImg from '../../assets/Product.png'
import StarLogo from '../../assets/Star.svg'

const ProductCard: React.FC = () => {
  return (
    <>
      <Link href={'/catalog/jacket'}>
        <div className="card w-fit shadow-md bg-base-100 hover:bg-base-200 cursor-pointer">
          <figure>
            <Image 
              className='w-full'
              src={ProductImg} 
              alt="Jacket"
              />
          </figure>
          <div className="flex flex-col gap-3 p-3">
            <h2 className="card-title text-lg text-base-300 font-normal">Pocketable UV Protection Parka 3D Cut</h2>
            <p className='font-medium text-base'>Rp600.000</p>
            <div className='flex items-center gap-2'>
              <Image
                className='w-6'
                src={StarLogo}
                alt='star logo'
              />
              <p className='text-base-300 font-normal'>4.0 (200 Reviews)</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;