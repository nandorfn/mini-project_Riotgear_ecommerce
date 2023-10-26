import { ProductData } from '@/app/utils/types';
import deleteIcon from '@/app/assets/icon/delete.svg'
import editIcon from '@/app/assets/icon/edit.svg'
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
        <tr className='capitalize' key={index}>
          <th>{index + 1}</th>
          <td className=' line-clamp-1'>{product.productName}</td>
          <td>{product.productMainCategory}</td>
          <td>{product.productSubCategory}</td>
          <td>{product.productColor}</td>
          <td>{product.productSize}</td>
          <td>{product.productStock}</td>
          <td>{`Rp${product.productPrice.toLocaleString('id-ID')}`}</td>
          <td className="flex flex-row gap-3">
              <button
                onClick={() => handleEditProduct(product.productId)}
              >
                <Image
                  src={editIcon}
                  width={26}
                  height={26}
                  alt="Edit Icon"
                />
              </button>
              <button
                onClick={() => handleDelete(product.productId)}
              >
                <Image
                  width={20}
                  height={20}
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