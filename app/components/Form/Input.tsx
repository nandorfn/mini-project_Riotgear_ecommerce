interface InputProps {
  name: string,
  value: string,
  label: string,
  placeholder: string,
  handleInput: (e: React.SyntheticEvent) => void,
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  label,
  handleInput,
  placeholder
}) => {
    return (
        <>
          <div>
            <label>
              {label}
              <input
                name={name}
                value={value}
                onChange={(e) => handleInput(e)}
                type="text" 
                placeholder={placeholder}
                className="input input-bordered flex w-full mt-3" />
            </label>
          </div>
        </>
    );
};

export default Input;