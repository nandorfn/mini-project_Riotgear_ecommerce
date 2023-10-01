interface InputProps {
  name: string,
  value: string,
  label: string | null,
  type: string,
  placeholder: string,
  handleInput: (e: React.SyntheticEvent) => void,
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  type,
  label,
  handleInput,
  placeholder
}) => {
  return (
    <>
      {label
        && <label htmlFor={name}>{label} </label>
      }
      <input
        name={name}
        id={name}
        value={value}
        onChange={(e) => handleInput(e)}
        type={type}
        placeholder={placeholder}
        className="input input-bordered flex w-full" />
    </>
  );
};

export default Input;