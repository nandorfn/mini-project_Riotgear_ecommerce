import Link from "next/link";
import { checkUserLogin } from "@/app/utils/auth";
import { sizeChart } from "@/app/helpers/dataObject";

import { Heading } from '@/app/components/Container/Heading'
import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import PurchaseBtn from "@/app/components/Button/PurchaseBtn";
import List from "../List";

interface Props {
  name?: string | null;
  id?: string | null;
  price?: number | null;
  sizes?: string | null;
  color?: string;
  stock?: number;
}

const ProductDetails: React.FC<Props> = async ({
  name,
  price,
  sizes,
  id,
  stock
}) => {
  const formattedPrice = price?.toLocaleString('id-ID')
  const user = await checkUserLogin();

  return (
    <>
      <Flex align={'between'} className="min-h-[20%] text flex-col-reverse md:flex-col">
        <Heading variant={'pName'}>{name}</Heading>
        <Heading fs={'xl2'} bold={'normal'}>{`Rp${formattedPrice}`}</Heading>
      </Flex>
      <div className="border-t mt-4 md:mt-0"></div>
      <div className="hidden md:flex flex-col justify-between gap-3">
        <h4 className="font-medium text-xl">Size</h4>
        <List
          name="sizeChartProduct"
          data={sizeChart}
          renderItem={(size) => {
            const { label, value } = size;
            const isSelected = value === sizes;
            return (
              <Button
                name={'size'}
                defaultValue={sizes ?? ''}
                size={'sm'}
                font={'normal'}
                variant={isSelected ? 'checked' : 'sizeBtn'}>{label}
              </Button>
            )
          }}
        />
        
        {!user
          ? <Link href={'/login'}>
              <Button variant={'red'} className="text-white" size={'full'}>LOGIN TO CHECKOUT</Button>
            </Link>
          : <PurchaseBtn
            user={user}
            id={id}
            stock={stock}
          />
        }
      </div>

    </>
  );
};

export default ProductDetails;