import React, { FC } from 'react';
import { CardSkeleton } from '../Card';

export interface IProps {}

const Skeletons: FC<IProps> = ({}) => {
  return (
    <div>
      {new Array(10).fill(true).map((_: boolean, index: number) => {
        return (
          <div className="pb-4" key={index.toString()}>
            <CardSkeleton />
          </div>
        );
      })}
    </div>
  );
};

export default Skeletons;
