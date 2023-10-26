interface Props {
  handleInput: (e: React.SyntheticEvent) => void;
  value: string | null;
}
const ColorChart: React.FC<Props> = ({ handleInput, value }) => {

  type Color = {
    label: string,
    color: string
  }
  const color = [
    { label: 'Black', color: 'bg-black' },
    { label: 'Grey', color: 'bg-zinc-300' },
    { label: 'White', color: 'bg-base-100' },
    { label: 'Brown', color: 'bg-amber-950' },
    { label: 'Red', color: 'bg-error' },
    { label: 'Green', color: 'bg-green-700' },
    { label: 'Blue', color: 'bg-blue-500' },
    { label: 'Yellow', color: 'bg-yellow-400' },
    { label: 'Orange', color: 'bg-orange-400' },
  ]

  return (
    <>
      <div>
        <label className="font-medium mb-3">Color
          <ul className="grid grid-cols-5 md:grid-cols-3 text-center">
            {color?.map((item: Color , index: number) =>
              <li key={index}>
                <input
                  name="color"
                  type="radio"
                  checked={item.label === value}
                  value={item.label.toLocaleLowerCase()}
                  onChange={(e) => handleInput(e)}
                  className={`radio p-3 mt-3 ${item.color}`} />
                <p className="font-normal text-base-300">{item.label}</p>
              </li>
            )}
          </ul>
        </label>
      </div>
    </>
  );
};

export default ColorChart;