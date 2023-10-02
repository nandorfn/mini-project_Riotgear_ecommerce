import React from 'react';

interface Props {
  data: string[];
  renderItem: (size: string) => React.ReactNode;
}

const List: React.FC<Props> = ({ renderItem, data }) => {

  return (
    <div>
      <h4 className="font-medium mb-3">Size</h4>
      <ul className="flex gap-3 flex-wrap">
        {data?.map((item: string, index: number) => (
          <li key={index}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
