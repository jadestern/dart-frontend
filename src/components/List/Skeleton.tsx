import React, { FC } from 'react';
import { CardSkeleton } from './Card';

export interface IProps {
  count: number;
}

const ListSkeleton: FC<IProps> = ({ count = 10 }) => {
  return (
    <div>
      {new Array(count).fill(true).map((_: boolean, index: number) => {
        return (
          <div className="pb-4" key={index.toString()}>
            <CardSkeleton />
          </div>
        );
      })}
    </div>
  );
};

export default ListSkeleton;
