import React from "react";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import {
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router";
import { Link } from "react-router-dom";
import { FetchCoinInfo } from "../../API/FetchCoinInfo";
import { FetchCoinPrice } from "../../API/FetchCoinPrice";
import Chart from "../Chart";
import Price from "../Price";
import {
  Container,
  Header,
  Loader,
  OverviewBox,
  OverviewDescription,
  OverviewItem,
  OverviewWrap,
  Tab,
  Tabs,
  Title,
} from "./Coin.style";

interface IRouterState {
  name: string;
}

interface IParamState {
  coinId: string;
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin: React.FC = () => {
  const { coinId } = useParams<IParamState>();
  const { state } = useLocation<IRouterState>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");

  const { isLoading: infoLoading, data: info } = useQuery<IInfoData>(
    ["info", coinId],
    () => FetchCoinInfo(coinId)
  );
  const { isLoading: priceLoading, data: priceInfo } = useQuery<IPriceData>(
    ["tickers", coinId],
    () => FetchCoinPrice(coinId),
    { refetchInterval: 5000 }
  );

  const loading = infoLoading || priceLoading;

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? "Loading..." : info?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : info?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <OverviewWrap>
          <OverviewBox>
            <OverviewItem>
              <span>RANK:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>SYMBOL:</span>
              <span>{info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>PRICE:</span>
              <span>${priceInfo?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </OverviewBox>
          <OverviewDescription>{info?.description}</OverviewDescription>
          <OverviewBox>
            <OverviewItem>
              <span>TOTAL SUPPLY:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>MAX SUPPLY:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </OverviewBox>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>
                <p>CHART</p>
              </Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>
                <p>PRICE</p>
              </Link>
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/:coinId/chart`}>
              <Chart coinId={coinId} />
            </Route>
            <Route path={`/:coinId/price`}>
              <Price />
            </Route>
          </Switch>
        </OverviewWrap>
      )}
    </Container>
  );
};

export default Coin;
