interface Props {
  addClass: string;
  label: string;
}

const Button: React.FC<Props> = (
  { addClass, label }
) => {
    return (
        <>
          <button className={`btn ${addClass}`} type="button">{label}</button>
        </>
    );
};

export default Button;