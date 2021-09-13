import QuoteList from '../components/quotes/QuoteList';
import { useSelector } from 'react-redux';

const AllQuotes = () => {
  const quotes = useSelector(state=> state.quotes)
  return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
