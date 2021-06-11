import GlobalStyle from './GlobalStyle'
import {Route, Switch} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Inventories from './pages/Inventories';
import Sales from './pages/Sales';
import Stock from './pages/Stock';
import MakeSale from './pages/MakeSale';
import AddStock from './pages/AddStock';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthRoute from './AuthRoute'
import Home from './pages/Home';

function App() {
  return (
    <>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact component={Home}/>
      <AuthRoute path="/dashboard" exact component={Dashboard}/>
      <AuthRoute path="/inventories" exact component={Inventories}/>
      <AuthRoute path="/sales" exact component={Sales}/>
      <AuthRoute path="/stock" exact component={Stock}/>
      <AuthRoute path="/inventories/:id/make-sale" exact component={MakeSale}/>
      <AuthRoute path="/inventories/:id/add-stock" exact component={AddStock}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/login" exact component={Login}/>
    </Switch>
    </>
  );
}

export default App;
