import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as Routes from "./Routes/index";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Routes.Coins} />
        <Route path="/:coinId" component={Routes.Coin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
