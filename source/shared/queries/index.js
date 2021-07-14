const uniV3Queries = {
  poolDayDatas: `{
  poolDayDatas(
   where: {
   liquidity_gt:0
   pool_in:
   ["0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8"]})
 {
   date
   liquidity
   token0Price
   token1Price
   pool {
    token0 {
     name
     symbol
     totalSupply
     volumeUSD
   }
       token1 {
     name
     symbol
     totalSupply
     volumeUSD
   }
   }
 },
}`,
};

const uniV2Queries = {
  pairDayDatas: `
 {
  pairDayDatas(
    where:{
      date_gte: 1620552800
      pairAddress:
    "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"
  }) {
      date
 	    token0 {
      symbol
       totalSupply
       totalLiquidity
    }
    token1 {
      symbol
      totalSupply
     totalLiquidity
    }
    dailyVolumeToken0
    dailyVolumeToken1
    totalSupply
	}
}
`,
};

const sushiswapQueries = {
  tokens: `tokens {
    name
    liquidity
    totalSupply
  }`,
  pairDayData: `
 pairDayDatas(where:
  {
  pair:"0x397ff1542f962076d0bfe58ea045ffa2d347aca0"},
  orderDirection: asc
  first: 100
){
  id
  pair{
    token0Price
    token1Price
  }
  date
  token0{
    id
    symbol
    totalSupply
  }
    token1{
    id
      symbol
  }
}`,
};

export { uniV2Queries, uniV3Queries, sushiswapQueries };
