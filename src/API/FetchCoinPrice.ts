export const FetchCoinPrice = async (coinId: string) => {
  const res = await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
  const json = res.json();
  return json;
};
