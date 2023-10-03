interface Props {
  handleInput: (e:React.SyntheticEvent) => void;
  value: string | null;
}
const ColorChart: React.FC<Props> = ({handleInput, value}) => {
  const color = [
    {label: 'Black', color:'bg-black'},
    {label: 'Grey', color:'bg-zinc-300'},
    {label: 'White', color:'bg-base-100'},
    {label: 'Red', color:'bg-error'},
    {label: 'Green', color:'bg-green-700'},
    {label: 'Blue', color:'bg-blue-500'},
    {label: 'Yellow', color:'bg-yellow-400'},
    {label: 'Orange', color:'bg-orange-400'},
  ]

    return (
        <>
          <div>
            <h4 className="font-medium mb-3">Color</h4>
            <ul className="grid grid-cols-4 text-center">
              {color?.map((item, index) =>
                <li key={index}>
                  <input 
                    name="color"
                    type="radio"
                    checked={item.label === value}
                    value={item.label}
                    onChange={(e) => handleInput(e)} 
                    className={`radio p-3 mt-3 ${item.color}`} />
                  <p>{item.label}</p>
                </li>
              )}
            </ul>
          </div>
        </>
    );
};

export default ColorChart;