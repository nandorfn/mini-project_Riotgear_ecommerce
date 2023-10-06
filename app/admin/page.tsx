import Image from "next/image";
import { getPopularProducts } from "../utils/queryDb";

const page = async () => {
  const popularProducts = await getPopularProducts();

  return (
    <>
      <div className="overflow-x-auto">
        <h2 className="text-xl font-medium">Popular Products</h2>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Views count</th>
            </tr>
          </thead>
          <tbody>
            {popularProducts?.slice(0, 10).map((product, index) =>
              <tr key={product.id}>
                <th>{index + 1}</th>
                <td>
                  <Image src={product.productImgLink} width={40} height={40} alt="Image Product"/>
                </td>
                <td>{product.productName}</td>
                <td>{product.productSubCategory}</td>
                <td>{product.viewsCount}</td>
              </tr>
            )
            }

          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;