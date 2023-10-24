
const CollapseDetails = ({data}: {data: any}) => {
  return (
    <>
      {data.length > 1 &&
        <p className="text-success">
          {`Check ${data.length - 1} other products`}
        </p>
      }
    </>
  );
};

export default CollapseDetails;