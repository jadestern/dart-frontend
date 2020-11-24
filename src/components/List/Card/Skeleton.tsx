import React, { FC } from 'react';
import MaterialSkeleton from '@material-ui/lab/Skeleton';

export interface IProps {}

const CardSkeleton: FC<IProps> = ({}) => {
  return <MaterialSkeleton animation="wave" variant="rect" height={169.31} />;
};

export default CardSkeleton;
