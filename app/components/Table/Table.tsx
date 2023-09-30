import Button from "../Button/Button";

interface LabelProps {
  label: string,
  headTable: string[]
}

const Table: React.FC<LabelProps> = ({
  label,
  headTable
}) => {
  return (
    <>
      <label className="font-medium text-xl">
        {label}
        <div className="overflow-x-auto p-1 mt-3">
          <table className="table table-zebra bg-base-100">
            {/* head */}
            <thead>
              <tr>
                {headTable?.map((head, index) =>
                  <th key={index}>{head}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>
                  <Button
                    addClass="btn-error btn-sm capitalize"
                    label="Delete"
                  />
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>
                  <Button
                    addClass="btn-error btn-sm capitalize"
                    label="Delete"
                  />
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>
                  <Button
                    addClass="btn-error btn-sm capitalize"
                    label="Delete"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </label>
    </>
  );
};

export default Table;