import { genderOptionType } from "@/app/data/faqData";

interface Props {
  data: genderOptionType[];
  addClass: string;
}

const Checkbox: React.FC<Props> = ({ data, addClass }) => {
  return (
    <>
      <div className={`${addClass} form-control`}>
        {data?.map((item, index) =>
          <label className="flex gap-3 cursor-pointer items-center" key={index} htmlFor={item.name}>
            <input className="checkbox checkbox-sm" type="checkbox" name={item.name} value={item.value} />
            <span className="label-text text-base">{item.value}</span> 
          </label>
        )}
      </div>

    </>
  );
};

export default Checkbox;