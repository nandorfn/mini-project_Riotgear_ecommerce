import { ProductData } from '@/app/utils/utils';
import deleteIcon from '../../assets/icon/delete.svg'
import editIcon from '../../assets/icon/edit.svg'
import Image from "next/image";

interface Props {
  dataMapping: ProductData[];
  handleEdit: (id: string) => void;
  handleEditModal: () => void;
  handleDelete: (id: string) => void;
}

const TableBody: React.FC<Props> = ({
  dataMapping,
  handleEdit,
  handleEditModal,
  handleDelete,
}) => {
  const handleEditProduct = (id: string) => {
    handleEdit(id);
    handleEditModal();
  }

  return (
    <>
      {dataMapping?.map((product: any, index: number) =>
        <tr key={index}>
          <th>{index + 1}</th>
          <td>{product.productName}</td>
          <td>{product.productMainCategory}</td>
          <td>{product.productSubCategory}</td>
          <td>{product.productStock}</td>
          <td>{product.productPrice}</td>
          <td className="flex flex-row gap-3">
            <button
              onClick={() => handleEditProduct(product.productId)}
            >
              <Image
                src={editIcon}
                alt="Edit Icon"
              />
            </button>
            <button
              onClick={() => handleDelete(product.productId)}
            >
              <Image
                src={deleteIcon}
                alt="Delete Icon"
              />
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableBody;