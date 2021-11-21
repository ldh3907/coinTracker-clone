import { useQuery } from "react-query";
import { FetchCoinHistory } from "../../API/FetchCoinHistory";
import ApexChart from "react-apexcharts";
import { theme } from "../../theme";

interface IChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart: React.FC<IChartProps> = ({ coinId }) => {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    FetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[{ name: "Price", data: data?.map((price) => price.close) }]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: { height: 500, width: 500, background: "transparent" },
            stroke: {
              curve: "smooth",
            },
            yaxis: {
              show: false,
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
