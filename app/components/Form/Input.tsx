interface InputProps {
  name: string,
  value: string,
  type: string,
  placeholder: string,
  handleInput: (e: React.SyntheticEvent) => void,
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  type,
  handleInput,
  placeholder
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
        className="input input-bordered mt-2 flex w-full" />
    </>
  );
};

export default Input;