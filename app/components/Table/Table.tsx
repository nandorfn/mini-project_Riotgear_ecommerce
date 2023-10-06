export type TableProps = {
  tableHead: string[];
  label: string;
  mapping: any;
  columns: any;
}

const Table = ({
  tableHead,
  mapping,
  columns,
  label
}: TableProps) => {

  return (
    <>
      <div className="overflow-x-auto">
        <h2 className="text-xl font-medium">{label}</h2>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              {tableHead?.map((head, index) =>
                <th key={index}>
                  {head}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {mapping?.slice(0, 10).map((product: any, index: number) =>
              <tr key={index}>
                <th>{index + 1}</th>
                {columns?.map((column: any, index: number) => (
                    <td key={index}>
                      {product[column.label]}
                    </td>
                ))}
              </tr>
            )
            }

          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;