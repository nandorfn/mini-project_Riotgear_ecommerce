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
        <label className="form-label flex flex-col w-full" htmlFor="productCategory">
          {label}
        <select
          name={name}
          aria-label="Default select example"
          onChange={(e) => handleInput(e)}
          value={value}
          className={`form-control select ${error 
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
        </label>
    </>
  );
}

export default OptionInput;