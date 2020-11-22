import React, { FC } from 'react';
import MaterialCard from '@material-ui/core/Card';
import MaterialCardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { EstimatedPrice } from '../../../lambda/getList';
import { getCurrencyKRW } from '../../../helper/currency';

export interface IProps extends EstimatedPrice {}

const Card: FC<IProps> = ({
  name,
  close,
  buy,
  diff_percent,
  sell_half,
  sell_all,
}) => {
  return (
    <MaterialCard>
      <MaterialCardContent>
        <div className="flex justify-between">
          <Typography color="primary" variant="h6" gutterBottom>
            {name}
          </Typography>
          <div>
            <span>매수가: </span>
            <Typography color="secondary" variant="subtitle1" component="span">
              {getCurrencyKRW(buy)}
            </Typography>
          </div>
        </div>
        <Typography className="text-right text-gray-500" variant="body2">
          종가: {getCurrencyKRW(close)} ({diff_percent.toFixed(2)} %)
        </Typography>
        <div className="flex justify-between mt-4">
          <Typography className="flex items-center px-6" variant="body2">
            매도가
          </Typography>
          <div className="flex-grow pl-16">
            <div className="flex justify-between flex-auto">
              <Typography>50%</Typography>
              <Typography color="textPrimary">
                {getCurrencyKRW(sell_half)}
              </Typography>
            </div>
            <div className="flex justify-between flex-auto mt-2">
              <Typography>100%</Typography>
              <Typography color="textPrimary">
                {getCurrencyKRW(sell_all)}
              </Typography>
            </div>
          </div>
        </div>
      </MaterialCardContent>
    </MaterialCard>
  );
};

export default Card;
