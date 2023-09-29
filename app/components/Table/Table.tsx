interface LabelProps {
  label: string,
}

const Table: React.FC<LabelProps> = ({
  label
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
                <th>No</th>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </label>
    </>
  );
};

export default Table;