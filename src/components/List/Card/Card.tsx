import React, { FC } from 'react';
import MaterialCard from '@material-ui/core/Card';
import MaterialCardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { EstimatedPrice } from '../../../lambda/getList';
import { getCurrencyKRW } from '../../../helper/currency';
import calcDiffPercent from '../../../helper/calcDiffPercent';

export interface IProps extends EstimatedPrice {}

const Card: FC<IProps> = ({
  stock_code,
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
          <div className="flex flex-col items-baseline">
            <Typography color="primary" variant="h6" gutterBottom>
              {name}
            </Typography>
            <div className="flex mt-2">
              <a
                className="w-5 h-5 flex justify-center items-center"
                href={`http://comp.fnguide.com/SVO2/asp/SVD_Main.asp?pGB=1&gicode=${stock_code}`}
                target="_blank"
              >
                <img
                  className="block w-full h-full"
                  src="http://comp.fnguide.com/SVO2/img/CompanyGuide.ico"
                  alt="FnGuide Logo"
                />
              </a>
              <a
                className="w-5 h-5 flex justify-center items-center ml-3"
                href={`https://finance.daum.net/quotes/${stock_code}`}
                target="_blank"
              >
                <img
                  className="block w-full h-full"
                  src="https://finance.daum.net/favicon.ico"
                  alt="FnGuide Logo"
                />
              </a>
              <a
                className="w-5 h-5 flex justify-center items-center ml-3"
                href={`https://m.stock.naver.com/item/main.nhn#/stocks/${stock_code.replace(
                  /\D/g,
                  ''
                )}`}
                target="_blank"
              >
                <img
                  className="block w-full h-full"
                  src="https://ssl.pstatic.net/imgstock/favicon.ico"
                  alt="FnGuide Logo"
                />
              </a>
            </div>
          </div>
          <div>
            <div className="text-right">
              <span>매수추천가: </span>
              <Typography
                color="secondary"
                variant="subtitle1"
                component="span"
              >
                {getCurrencyKRW(buy)}
              </Typography>
            </div>
            <Typography className="text-right text-gray-500" variant="body2">
              종가: {getCurrencyKRW(close)}({diff_percent.toFixed(2)}%)
            </Typography>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Typography className="flex items-center" variant="body2">
            매도추천가
          </Typography>
          <div className="flex-grow pl-6">
            <div className="flex justify-between flex-auto">
              <Typography>50%</Typography>
              <Typography color="textPrimary">
                {getCurrencyKRW(sell_half)} ({calcDiffPercent(buy, sell_half)}
                %)
              </Typography>
            </div>
            <div className="flex justify-between flex-auto mt-2">
              <Typography>100%</Typography>
              <Typography color="textPrimary">
                {getCurrencyKRW(sell_all)} ({calcDiffPercent(buy, sell_all)}%)
              </Typography>
            </div>
          </div>
        </div>
      </MaterialCardContent>
    </MaterialCard>
  );
};

export default Card;
