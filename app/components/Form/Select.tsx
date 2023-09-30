
const Select: React.FC = () => {
  return (
    <>
      <label className="flex flex-col font-medium">
        Quantity
        <select className="select bg-base-200 select-sm w-24 mt-3 max-w-xs">
          <option disabled selected> </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </label>
    </>
  );
};

export default Select;