import { category } from "@/app/data/faqData";
import ErrorMsg from "../ErrorMsg";

interface Props {
  label: string,
  name: string,
  value: any;
  addClass: string;
  optionValue: category[];
  handleInput: (e: React.SyntheticEvent) => void;
  error?: string;
}

const OptionInput: React.FC<Props> = ({
  label,
  name,
  value,
  optionValue,
  handleInput,
  error,
  addClass
}) => {


  return (
    <>
        <label className="form-label flex flex-col w-full" htmlFor="productCategory">
          {label}
        <select
          name={name}
          aria-label="Default select example"
          onChange={(e) => handleInput(e)}          
          value={value ?? ''}
          className={`form-control select ${addClass} ${error 
            ? "border-1 border-danger" 
            : ""}`
          }>
          {optionValue.map((option) => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))}
        </select>
        {error &&
          <ErrorMsg name={name} error={error}/>
        }
        </label>
    </>
  );
}

export default OptionInput;