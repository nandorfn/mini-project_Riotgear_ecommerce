import Table from "../components/Table/Table";
import { headTableProduct } from "../helpers/dataObject";
import { getPopularProducts } from "../utils/queryDb";

const page = async () => {
  const popularProducts = await getPopularProducts();

  return (
    <>
        
    </>
  );
};

export default page;