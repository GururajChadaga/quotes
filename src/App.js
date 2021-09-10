import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/quotes'>
          <AllQuotes />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
