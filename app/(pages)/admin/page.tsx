import { getAnalyticsData, getFeatured, getPopularProducts } from "@/app/utils/queryDb";
import { Flex } from "@/app/components/Container/Flex";
import Progress from "@/app/components/Chart/Progress";
import { Heading } from "@/app/components/Container/Heading";
import ListCard from "@/app/components/Card/ListCard";
import LineChart from "@/app/components/Chart/LineChart";

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
      <Heading fs={'xl2'} className="px-4 lg:px-0">Dashboard</Heading>
      <div className="grid px-4 lg:px-0 grid-cols-1 lg:grid-cols-2 gap-10">
        <Flex variant={'col'} className=" gap-2 bg-zinc-100 rounded-xl shadow-sm p-5">
          <Heading variant={'five'} className="mb-2">Popular Products</Heading>
          <ListCard data={popularProducts} />
        </Flex>
        <Flex variant={'col'} className="gap-10">
          <Flex variant={'col'} className="gap-2 bg-zinc-100 h-fit p-5 rounded-xl">
            <Heading variant={'five'}>Sales Statistic</Heading>
            <div className="stats shadow bg-primary">
              <div className="stat place-items-center">
                <div className="stat-title font-bold text-xl text-black">Income</div>
                <div className="stat-value text-white">{`Rp${analytics.totalIncome.toLocaleString('ID-id')}`}</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title font-bold text-xl text-black">Product Sold</div>
                <div className="stat-value text-secondary">{analytics.totalProductSell}</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title font-bold text-xl text-black">Users</div>
                <div className="stat-value text-white">{analytics.totalUser}</div>
              </div>
            </div>
          </Flex>
          <Flex variant={'col'} className="gap-2 bg-zinc-100 h-fit p-5 rounded-xl">
            <Heading variant={'five'}>Popular Category</Heading>
            <Progress data={scaledData} />
          </Flex>
          <Flex variant={'col'} className="gap-2 bg-zinc-100 h-fit p-5 rounded-xl">
            <Heading variant={'five'}>Daily Income In A Month</Heading>
            <LineChart sourceData={analytics.daily} />
          </Flex>

        </Flex>
        <Flex variant={'col'} className=" gap-2 bg-zinc-100 rounded-xl shadow-sm p-5">
          <Heading variant={'five'} className="mb-2">Featured Products</Heading>
          <ListCard data={featuredProducts} />
        </Flex>



      </div>
    </>
  );
};

export default page;