import ErrorMsg from "../ErrorMsg";

interface Props {
  label: string;
  name: string;
  value: string;
  handleInput: (e: React.SyntheticEvent) => void;
  error: string;
}

export const TextArea: React.FC<Props> = ({
  label,
  name,
  value,
  handleInput,
  error
}) => {
  return (
    <>
      <label htmlFor="form-floating">
        {label}
      </label>
      <div className="form-floating">
        <textarea
          value={value}
          onChange={(e) => handleInput(e)}
          className={`form-control ${error
            ? 'border-1 border-danger'
            : 'textarea textarea-bordered w-full'}`
          }
          style={{ height: 100 }}
          name={name}
        />
        <ErrorMsg name={name} error={error}/>
      </div>
    </>
  )
}