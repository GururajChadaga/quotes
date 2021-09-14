import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { sendData, fetchData } from './store/actions';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AllQuotes = lazy(() => import('./pages/AllQuotes'));
const NewQuote = lazy(() => import('./pages/NewQuote'));
const QuoteDetail = lazy(() => import('./pages/QuoteDetail'));

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
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
    </Layout>
  );
}

export default App;
