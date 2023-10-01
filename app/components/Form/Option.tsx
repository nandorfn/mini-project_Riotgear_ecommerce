import { category } from "@/app/data/faqData";
import ErrorMsg from "../ErrorMsg";

interface Props {
  label: string,
  name: string,
  optionLabel: string;
  value: string;
  optionValue: category[];
  handleInput: (e: React.SyntheticEvent) => void;
  error: string;
}

const OptionInput: React.FC<Props> = ({
  label,
  name,
  optionLabel,
  value,
  optionValue,
  handleInput,
  error,
}) => {


  return (
    <>
      <div>
        <label className="form-label" htmlFor="productCategory">
          {label}
        </label>
        <br />
        <select
          name={name}
          aria-label="Default select example"
          onChange={(e) => handleInput(e)}
          value={value}
          className={`form-control ${error 
            ? "border-1 border-danger" 
            : ""}`
          }>
          <option value="" disabled>
            {optionLabel}
          </option>
          {optionValue.map((option) => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))}
        </select>
        <ErrorMsg name={name} error={error}/>
      </div>
    </>
  );
}

export default OptionInput;