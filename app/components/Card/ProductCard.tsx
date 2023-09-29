import Image from 'next/image';
import ProductImg from '../../assets/Product.png'

const ProductCard: React.FC = () => {
  return (
    <>
      <div className="card card-compact w-64 bg-base-100 shadow-xl">
        <figure>
          <Image 
            className='w-full'
            src={ProductImg} 
            alt="Jacket"
            />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Pocketable UV Protection Parka 3D Cut</h2>
          <p>Rp600.000</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;