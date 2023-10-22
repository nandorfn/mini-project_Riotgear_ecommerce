import Image from "next/image";
import { getAnalyticsData, getFeatured, getPopularProducts } from "@/app/utils/queryDb";
import Table from "@/app/components/Table/Table";
import { columnFeaturedPrdouct, featuredTableHead } from "@/app/helpers/dataObject";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import Progress from "@/app/components/Chart/Progress";

const page = async () => {
  const popularProducts = await getPopularProducts();
  const featuredProducts = await getFeatured();
  const analytics = await getAnalyticsData();  
  const maxValue = Math.max(...analytics.popularCategory.map(item => item.viewsCount));
  
  const scaledData = analytics.popularCategory.map(item => ({
    productSubCategory: item.productSubCategory,
    viewsCount: item.viewsCount,
    scaledViewsCount: (item.viewsCount / maxValue) * 100
  }));
  

  return (
    <>
      <div className="grid grid-cols-4 gap-10">
      <Flex variant={'col'} className="shadow-sm p-5 bg-zinc-100  h-fit rounded-xl gap-3">
        <Heading variant={'five'}>Popular Category</Heading>
        <Progress 
          data={scaledData}
        />
      </Flex>
        
      
      
        {/* <Flex variant={'col'} className="bg-base-200 gap-2 p-5 rounded-xl">
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
      </div> */}
      </div>
    </>
  );
};

export default page;