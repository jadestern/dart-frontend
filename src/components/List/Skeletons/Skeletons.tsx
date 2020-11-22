import React, { FC } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export interface IProps {}

const Skeletons: FC<IProps> = ({}) => {
  const Item = () => {
    return (
      <div className="pb-4">
        <Skeleton animation="wave" variant="rect" height={169.31} />
      </div>
    );
  };

  return (
    <div>
      {new Array(10).fill(true).map((_: boolean, index: number) => {
        return <Item key={index.toString()} />;
      })}
    </div>
  );
};

export default Skeletons;
