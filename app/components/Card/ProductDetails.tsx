import PurchaseBtn from "../Button/PurchaseBtn";
import { Heading } from '@/app/components/Container/Heading'
import List from "../List";
import { sizeChart } from "@/app/helpers/dataObject";
import { Button } from "../Button/Button";
import { Flex } from "../Container/Flex";
import { cookies } from "next/headers";
import { verifyAuth } from "@/app/utils/auth";
import { JwtSchema } from "@/app/utils/types";
import Skeleton from "react-loading-skeleton";

interface Props {
  name?: string | null;
  id?: string | null;
  price?: number | null;
  sizes?: string | null;
  color?: string;
}

const ProductDetails: React.FC<Props> = async ({
  name,
  price,
  sizes,
  id
}) => {
  const formattedPrice = price?.toLocaleString('id-ID')
  const cookieStore = cookies()
  const token = cookieStore.get('token');
  const user: JwtSchema | void =
  token &&
    (await verifyAuth(token.value).catch((err) => {
      console.log(err);
    }))
    
  return (
    <>
      <Flex align={'between'} className="min-h-[20%] text flex-col-reverse md:flex-col">
        <Heading variant={'pName'}>{name || <Skeleton />}</Heading>
        <Heading fs={'xl2'} bold={'normal'}>{`Rp${formattedPrice}`}</Heading>
      </Flex>
      <div className="border-t"></div>
      <div className="hidden md:flex flex-col gap-3">
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
        <PurchaseBtn
          user={user}
          id={id}
        />
      </div>

    </>
  );
};

export default ProductDetails;