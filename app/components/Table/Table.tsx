import { ProductData } from "@/app/utils/utils";
import TableBody from "./TableBody";


interface LabelProps {
  dataProducts?: ProductData[];
  filteredData?: ProductData[];
  headTable: string[],
  label?: string,
  search?: string,
  handleDelete?: (id: string) => void;
  handleEdit?: (id: string) => void;
  handleEditModal?: () => void;
}

const Table: React.FC<LabelProps> = ({
  label,
  headTable,
  dataProducts,
  handleDelete,
  handleEdit,
  handleEditModal,
  filteredData,
  search
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
              {search === ""
                ? <TableBody
                  dataMapping={dataProducts}
                  handleEdit={handleEdit}
                  handleEditModal={handleEditModal}
                  handleDelete={handleDelete}
                />
                : <TableBody
                  dataMapping={filteredData}
                  handleEdit={handleEdit}
                  handleEditModal={handleEditModal}
                  handleDelete={handleDelete}
                />
              }
            </tbody>
          </table>
        </div>
      </label>
    </>
  );
};

export default Table;