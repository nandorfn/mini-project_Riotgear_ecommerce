import Image from 'next/image';
import Link from 'next/link';
import StarLogo from '../../assets/Star.svg'
import { Flex } from '../Container/Flex';
import { Heading } from '../Container/Heading';
import { Text } from '../Container/Text';

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
        <div className="card w-fit min-h-full shadow-sm bg-base-100 hover:bg-base-200 cursor-pointer">
        
          <figure className='h-[60%]'>
            <Image
              className='w-full'
              src={productImg}
              alt="Jacket"
              width={500}
              height={500}
            />
          </figure>
          
          <Flex variant={'col'} gap={3} className="p-3 h-[40%]">
            <Heading
              fs={'lg'}
              align={'start'}
              clr={'base3'}
              bold={'normal'}
              className="card-title items-start h-[3.6rem] overflow-hidden">
              {productName}
            </Heading>
            
            <Flex
              variant={'col'}
              gap={3}>
              <Text bold={'medium'}>{`Rp${price}`}</Text>
              <Flex align={'iCenter'} gap={2}>
                <Image className='w-6' src={StarLogo} alt='star logo'/>
                <Text clr={'zinc5'} fs={'sm'}>4.0 (200 Reviews)</Text>
              </Flex>
            </Flex>
            
          </Flex>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;