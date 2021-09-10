import { useParams } from 'react-router';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'James Clear',
    text: 'You do not rise to the level of your goals. You fall to the level of your systems.',
  },
  {
    id: 'q2',
    author: 'Vinnie',
    text: 'Make the metronome your friend, not your enemy.',
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote=DUMMY_QUOTES.find(quote=>quote.id===params.quoteId)
  return <HighlightedQuote author={quote.author} text={quote.text} />;
};

export default QuoteDetail;
