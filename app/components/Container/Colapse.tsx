type Props = {
  children: [React.ReactNode, React.ReactNode];
}

const Collapse = ({ children }: Props) => {
    return (
      <div className="collapse rounded-none">
        <input type="checkbox" className="peer" />
        <div className="collapse-title pt-0 px-5 rounded-none">
          {children[0]}
        </div>
        <div className="collapse-content">
          {children[1]}
        </div>
      </div>
    )
};

export default Collapse;
