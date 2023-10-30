import Image from 'next/image';
import Link from 'next/link';
import StarLogo from '@/app/assets/icon/Star.svg'
import { Flex } from '@/app/components/Container/Flex';
import { Heading } from '@/app/components/Container/Heading';
import { Text } from '@/app/components/Container/Text';

interface Product {
  productImg: string,
  productId?: string,
  productName?: string,
  productPrice: number,
  reviews?: any,
}

const ProductCard: React.FC<Product> = ({
  productImg,
  productId,
  productName,
  productPrice,
  reviews,
}) => {
  const price = productPrice.toLocaleString('id-ID');
  const { averageRating = 0, totalReviews = 0 } = reviews || {};
  return (
    <>
      <Link href={`/store/catalog/${productId}`}>
        <div className="card w-fit min-h-full shadow-sm bg-base-100 hover:bg-base-200 cursor-pointer">
          <figure className='h-[60%]'>
            <Image
              className='w-full'
              src={productImg}
              alt="Jacket"
              width={500}
              height={500}
              priority
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
              {totalReviews !== 0 &&
                <Flex align={'iCenter'} className='gap-1'>
                  <Image className='w-6' src={StarLogo} alt='star logo' />
                  <Text clr={'zinc5'} className='mt-[0.2rem]' fs={'sm'}>
                    {`${averageRating} (${totalReviews} Reviews)`}
                  </Text>
                </Flex>
              }
            </Flex>

          </Flex>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;