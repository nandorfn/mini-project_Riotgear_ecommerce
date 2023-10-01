import { ProductData } from "@/app/utils/utils";
import Button from "../Button/Button";
import deleteIcon from '../../assets/icon/delete.svg'
import editIcon from '../../assets/icon/edit.svg'

interface LabelProps {
  label: string,
  headTable: string[],
}

const Table: React.FC<LabelProps> = ({
  label,
  headTable,
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
            <tbody>
              {/* {productData?.map((product, index) => 
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.productMainCategory}</td>
                <td>{product.productStock}</td>
                <td>{product.productPrice}</td>
                <td>
                  <button>{deleteIcon}</button>
                  <button>{editIcon}</button>
                </td>
              </tr>
              )} */}
            </tbody>
          </table>
        </div>
      </label>
    </>
  );
};

export default Table;