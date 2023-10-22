import Image from "next/image";
import { getAnalyticsData, getFeatured, getIncomeSales, getPopularProducts } from "@/app/utils/queryDb";
import Table from "@/app/components/Table/Table";
import { columnFeaturedPrdouct, featuredTableHead } from "@/app/helpers/dataObject";
import { Flex } from "@/app/components/Container/Flex";

const page = async () => {
  const popularProducts = await getPopularProducts();
  const featuredProducts = await getFeatured();
  const analytics = await getAnalyticsData();
  console.log(analytics);

  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        
      
      
        <Flex variant={'col'} className="bg-base-200 gap-2 p-5 rounded-xl">
          <h2 className="text-xl font-medium">Popular Products</h2>
        {popularProducts?.slice(0, 10).map((product, index) =>
        <>
          <div className="divider my-0"></div>
          <Flex className="justify-between"  key={product.id}>
            <figure>
              <Image src={product.productImgLink} width={40} height={40} alt="Image Product" />
            </figure>
            <Flex variant={'col'} className="w-2/3">
              <p className="font-medium">{product.productName}</p>
              <p>{`Rp${product.productPrice.toLocaleString('ID-id')}`}</p>
            </Flex>
            <p>{`${product.viewsCount} Views`}</p>
          </Flex>
        </>
          
        )
        }
        </Flex>
      <div className="flex flex-col gap-8">
        <Table
          label={'Featured Products'}
          tableHead={featuredTableHead}
          mapping={featuredProducts}
          columns={columnFeaturedPrdouct}
        />
      </div>
      </div>
    </>
  );
};

export default page;