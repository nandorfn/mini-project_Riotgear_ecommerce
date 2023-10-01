interface Props {
  name: string;
  error: string;
}

const ErrorMsg: React.FC<Props> = ({name, error}) => {
  return (
    <p id={`error-${name}`} className="text-danger">{error}</p>
  )
}

export default ErrorMsg;
