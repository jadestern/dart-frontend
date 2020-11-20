import { APIGatewayEvent, Handler } from 'aws-lambda';
import faunadb from 'faunadb';

const q = faunadb.query;

export interface EstimatedPrice {
  stock_code: string;
  name: string;
  /** 종가 */
  close: number;
  buy: number;
  sell_half: number;
  sell_all: number;
  diff_percent: number;
}

interface FaunaData {
  ts: number;
  ref: any;
  data: EstimatedPrice;
}

interface FaunaResponse {
  after: any;
  data: FaunaData[];
}

const handler: Handler = async (event: APIGatewayEvent) => {
  const params = event.queryStringParameters;
  if (!params?.key) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        msg: 'Key not Found.',
      }),
    };
  }

  const client = new faunadb.Client({
    secret: params.key || '',
  });

  const { data } = (await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index('prices_sort_by_diff_percent_asc')), {
        size: 10,
      }),
      q.Lambda(['diff_percent', 'ref'], q.Get(q.Var('ref')))
    )
  )) as FaunaResponse;

  return {
    statusCode: 200,
    body: JSON.stringify({
      list: data.map((item: FaunaData) => item.data),
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };
};

export { handler };
