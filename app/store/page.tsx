import CardContainer from "../components/Card/CardContainer";
import { Flex } from "../components/Container/Flex";
import MenuFilter from "../components/Menu/MenuFillter";
import ScrollMenuContainer from "../components/Menu/ScrollMenuContainer";
import { getItem } from "../utils/queryDb";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const products = await getItem( searchParams );

  return (
    <>
      <Flex variant={'row'} className="md:p-4 gap-1">
        <div className="w-[27.6%] h-screen hidden md:block">
          <MenuFilter />
        </div>
        <div className="w-full pe-3 mt-3 md:mt-0 md:w-[73.4%]">
          <div className="sticky top-12 py-4 z-50 bg-white">
            <ScrollMenuContainer />
          </div>
          <CardContainer
            data={products}
          />
        </div>
      </Flex>
    </>
  );
};

export default page;