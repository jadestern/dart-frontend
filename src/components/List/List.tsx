import React, { FC, useEffect, useMemo, useState } from 'react';
import Axios from 'axios';
import { EstimatedPrice } from '../../lambda/getList';
import { Skeletons } from './Skeletons';
import { Card } from './Card';

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
    console.log(list);
    setList(list);
  };

  const loading = useMemo(() => {
    return list.length === 0;
  }, [list]);

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="">
      {loading ? (
        <Skeletons />
      ) : (
        list.map((item: EstimatedPrice, index: number) => {
          return (
            <div className="pb-4" key={index.toString()}>
              <Card {...item} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default List;
