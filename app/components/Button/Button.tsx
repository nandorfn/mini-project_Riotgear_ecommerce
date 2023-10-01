interface Props {
  addClass: string;
  label: string;
  handleClick?: () => void;
}

const Button: React.FC<Props> = (
  { addClass, label, handleClick }
) => {
    return (
        <>
          <button onClick={handleClick} className={`btn ${addClass}`} type="button">{label}</button>
        </>
    );
};

export default Button;