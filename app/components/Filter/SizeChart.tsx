
const SizeChart: React.FC = () => {
  const sizeChart = ["S", "M", "L", "XL", "XXL", "3XL"]

    return (
        <>
          <div>
            <h4>Size</h4>
            <ul className="flex gap-3 flex-wrap">
              {sizeChart?.map((size, index) =>
                <li key={index} className="btn btn-sm hover:bg-base-100 w-16 btn-base-200">{size}</li>
              )}
            </ul>
          </div>
        </>
    );
};

export default SizeChart;