import { categoryOption } from "@/app/helpers/dataObject";
import ErrorMsg from "../ErrorMsg";

interface Props {
  label: string,
  name: string,
  value: any;
  addClass: string;
  optionValue: categoryOption[];
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
        <label className="flex flex-col font-medium">
          {label}
        <select
          name={name}
          aria-label="Default select example"
          onChange={(e) => handleInput(e)}          
          value={value ?? ''}
          className={`form-control font-normal select ${addClass} ${error 
            ? "border-1 border-danger" 
            : ""}`
          }>
          {optionValue.map((option: any) => (
            <option key={option?.id} value={option.value || option.iso2}>
              {option.label || option.name}
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