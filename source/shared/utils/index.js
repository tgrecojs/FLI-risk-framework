import { request } from "graphql-request";
const convertUnixTimestamp = (timestamp) =>
  new Date(timestamp * 1000).toString();
const fetcher =
  (api) =>
  (query = ``) =>
    request(api, query);

const uniSubgraphAPI = (version) =>
  `https://api.thegraph.com/subgraphs/name/uniswap/uniswap-${version}`;

export { convertUnixTimestamp, fetcher, uniSubgraphAPI };
