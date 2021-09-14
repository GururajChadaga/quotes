import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sendData, fetchData } from './store/actions';

let isInitial = true;

function App() {
  const quotes = useSelector((state) => state.quotes);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchData('quotes'));
      return;
    }
    dispatch(sendData(quotes, 'quotes'));
  }, [dispatch, quotes]);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
