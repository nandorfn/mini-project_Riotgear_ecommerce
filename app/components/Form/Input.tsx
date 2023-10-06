import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLFormElement> {
  name: string,
  value: string,
  type: string,
  placeholder: string,
  handleInput: (e: React.SyntheticEvent) => void,
  disabled?: any
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  type,
  handleInput,
  placeholder,
  disabled
}) => {
  return (
    <>
      <input
        name={name}
        id={name}
        value={value}
        onChange={(e) => handleInput(e)}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className="input input-bordered flex w-full" />
    </>
  );
};

export default Input;