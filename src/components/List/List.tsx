import React, { FC, useEffect, useState } from 'react';
import Axios from 'axios';
import { EstimatedPrice } from '../../lambda/getList';

export interface IProps {}

interface GetListResponse {
  list: EstimatedPrice[];
}

const List: FC<IProps> = ({}) => {
  const [list, setList] = useState<EstimatedPrice[]>([]);

  const load = async () => {
    const {
      data: { list },
    } = await Axios.get<GetListResponse>(
      `/.netlify/functions/getList?key=${process.env.REACT_APP_FAUNADB_SERVER_SECRET}`
    );
    setList(list);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      {list &&
        list.length &&
        list.map((item: EstimatedPrice, index: number) => {
          return (
            <div key={index.toString()}>
              <div>종목: {item.name}</div>
              <div>종가: {item.close}</div>
              <div>매수가: {item.buy}</div>
              <div>종가 매수가 차이(%): {item.diff_percent}</div>
              <div>50% 매도가: {item.sell_half}</div>
              <div>100% 매도가: {item.sell_all}</div>
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default List;
