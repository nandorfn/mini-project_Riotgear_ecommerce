import { ProductData } from "@/app/utils/utils";
import deleteIcon from '../../assets/icon/delete.svg'
import editIcon from '../../assets/icon/edit.svg'
import Image from "next/image";

interface LabelProps {
  dataProducts: ProductData[] ;
  handleDelete: (id: string) => void;
  label: string,
  headTable: string[],
}

const Table: React.FC<LabelProps> = ({
  label,
  headTable,
  dataProducts,
  handleDelete,
}) => {
  return (
    <>
      <label className="font-medium text-xl">
        {label}
        <div className="overflow-x-auto p-1 mt-3">
          <table className="table table-zebra bg-base-100">
            <thead>
              <tr>
                {headTable?.map((head, index) =>
                  <th key={index}>{head}</th>
                )}
              </tr>
            </thead>
            <tbody className="text-base font-normal">
              {dataProducts?.map((product: any, index: number) => 
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.productMainCategory}</td>
                <td>{product.productStock}</td>
                <td>{product.productPrice}</td>
                <td className="flex flex-row gap-3">
                  <button>
                    <Image
                      src={editIcon}
                      alt="Edit Icon"
                    />
                  </button>
                  <button
                    onClick={(e) => handleDelete(product.productId)}
                  >
                    <Image 
                      src={deleteIcon}
                      alt="Delete Icon"
                    />
                  </button>
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </label>
    </>
  );
};

export default Table;