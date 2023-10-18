import { columnFeaturedPrdouct, featuredTableHead } from "@/app/helpers/dataObject";
import Table from "@/app/components/Table/Table";
import { getFeatured } from "@/app/utils/queryDb";


const Page = async () => {
  const featuredProducts = await getFeatured();
  return (
    <>
      <div className="flex flex-col gap-8">
        <Table 
          label={'Featured Products'}
          tableHead={featuredTableHead}
          mapping={featuredProducts}
          columns={columnFeaturedPrdouct}
        />
      </div>

    </>
  );
};

export default Page;