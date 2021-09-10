import { Route, Switch } from 'react-router-dom';
import QuoteForm from './components/quotes/QuoteForm';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/new-quote'>
          <QuoteForm />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
