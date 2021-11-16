import React from "react";
import { useParams } from "react-router";

interface IParamsType {
  coinId: string;
}

const Coin: React.FC = () => {
  const { coinId } = useParams<IParamsType>();
  return <div>Coin</div>;
};

export default Coin;
