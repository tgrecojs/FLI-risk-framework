import useSWR from "swr";
import { convertUnixTimestamp, fetcher, uniSubgraphAPI } from "../shared/utils";
import { uniV3Queries, uniV2Queries } from "../shared/queries";

const { poolDayDatas } = uniV3Queries;
const { pairDayDatas } = uniV2Queries;

const SubgraphData = ({ query = pairDayDatas }) => {
  const { data: v3Data, error: v3Error } = useSWR(
    poolDayDatas,
    fetcher(uniSubgraphAPI("v3"))
  );
  // ...
  const { data: v2Data, error: v2Error } = useSWR(
    pairDayDatas,
    fetcher(uniSubgraphAPI("v2"))
  );
  return !v3Data || !v2Data ? null : (
    <div>
      <h2>Subgraph Data</h2>
      <>
        <h3>Uni V2 Data</h3>
        {Object.values(v2Data.pairDayDatas).map(
          ({
            date,
            totalSupply,
            dailyVolumeToken0,
            dailyVolumeToken1,
            token1,
            token0,
          }) => (
            <div key={date}>
              <h4>Date : {convertUnixTimestamp(date)}</h4>
              <h3>Pool Data</h3>
              <p>Total Supply {totalSupply}</p>
              <p>
                {token0.symbol} Daily volumne: {dailyVolumeToken0}
              </p>
              <p>
                {token1.symbol} Daily volumne: {dailyVolumeToken1}
              </p>
            </div>
          )
        )}
      </>
      <>
        <h3>Uni V3 Data</h3>
        {Object.values(v3Data.poolDayDatas).map(
          ({ date, liquidity, pool, token0Price, token1Price }) => (
            <div key={date}>
              <h4>Date : {convertUnixTimestamp(date * 1000)}</h4>
              <h3>Pool Data</h3>
              <p>Daily liquidity: {liquidity}</p>
              <p>
                {pool.token0.symbol} Price: {token0Price}
              </p>
              <p>
                {pool.token1.symbol} Price: {token1Price}
              </p>
            </div>
          )
        )}
      </>
    </div>
  );
};

export default SubgraphData;
