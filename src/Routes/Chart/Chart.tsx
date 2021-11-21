import { useQuery } from "react-query";
import { FetchCoinHistory } from "../../API/FetchCoinHistory";
import ApexChart from "react-apexcharts";

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
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => FetchCoinHistory(coinId),
    { refetchInterval: 10000 }
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
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            yaxis: {
              show: false,
            },
            colors: ["#6c5ce7"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
