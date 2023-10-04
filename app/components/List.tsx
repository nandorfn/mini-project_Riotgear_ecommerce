import React from 'react';
import { sizeChart, sizeType } from '../helpers/dataObject';

interface Props {
  data: sizeType[];
  renderItem: (item: any) => React.ReactNode;
}

const List: React.FC<Props> = ({ renderItem, data }) => {

  return (
    <div>
      <h4 className="font-medium mb-3">Size</h4>
      <ul className="flex gap-3 flex-wrap">
        {data?.map((item, index: number) => (
          <li key={index}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
