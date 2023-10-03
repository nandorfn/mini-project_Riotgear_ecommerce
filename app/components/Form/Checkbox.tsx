'use client'
import { priceRangeType } from "@/app/data/faqData";


interface Props {
  data: priceRangeType[];
  addClass: string;
  handleInput: (e: React.SyntheticEvent) => void;
  value: string | null;
}

const Checkbox: React.FC<Props> = ({ data, addClass, handleInput, value }) => {

  return (
    <>
      <div className={`${addClass} form-control`}>
        {data?.map((item, index) =>
          <label className="flex gap-3 cursor-pointer items-center" key={index} htmlFor={item.name}>
            <input 
              className="radio radio-sm" 
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