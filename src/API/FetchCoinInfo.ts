export const FetchCoinInfo = async (coinId: string) => {
  const res = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
  const json = res.json();
  return json;
};
