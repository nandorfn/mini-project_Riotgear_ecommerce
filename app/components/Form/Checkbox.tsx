import { checkboxOptionType } from "@/app/helpers/dataObject";
interface Props {
  data: checkboxOptionType[];
  addClass: string;
  handleInput: (e: React.SyntheticEvent) => void;
  value: any;
}

const Checkbox: React.FC<Props> = ({
  data,
  addClass,
  handleInput,
  value
}) => {

  return (
    <>
      <div className={`${addClass} form-control`}>
        {data?.map((item: any, index: number) =>
          <label className="flex gap-3 cursor-pointer items-center font-normal" key={index} htmlFor={item.name}>
            <input
              className={`radio radio-sm ${item.name === 'gender' ? 'rounded-md' : ''}`}
              type="radio"
              name={item.name}
              value={item.value}
              onChange={(e) => handleInput(e)}
              checked={item.value === value}
            />
            <span className="label-text text-base">{item.label}</span>
          </label>
        )}
      </div>

    </>
  );
};

export default Checkbox;