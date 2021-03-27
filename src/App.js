import GlobalStyle from './GlobalStyle'
import {Route, Switch} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Inventories from './pages/Inventories';
import Sales from './pages/Sales';
import Stock from './pages/Stock';
import MakeSale from './pages/MakeSale';
import AddStock from './pages/AddStock';

function App() {
  return (
    <>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/inventories" exact component={Inventories}/>
      <Route path="/sales" exact component={Sales}/>
      <Route path="/stock" exact component={Stock}/>
      <Route path="/inventories/:id/make-sale" exact component={MakeSale}/>
      <Route path="/inventories/:id/add-stock" exact component={AddStock}/>
    </Switch>
    </>
  );
}

export default App;
