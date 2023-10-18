interface Props {
  label?: string;
  name: string;
  value: string;
  handleInput: (e: React.SyntheticEvent) => void;
}

export const TextArea: React.FC<Props> = ({
  label,
  name,
  value,
  handleInput,
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
          className='form-control textarea textarea-bordered font-normal w-full'
          style={{ height: 100 }}
          name={name}
        />
      </div>
    </>
  )
}