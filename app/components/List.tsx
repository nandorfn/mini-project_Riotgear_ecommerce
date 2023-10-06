import React from 'react';
import { categoryOption } from '../helpers/dataObject';

interface Props {
  data: categoryOption[];
  renderItem: (item: any) => React.ReactNode;
}

const List: React.FC<Props> = ({ renderItem, data }) => {
  return (
    <>
      <ul className="flex gap-3 flex-wrap">
        {data?.map((item, index: number) => (
          <li key={index}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
