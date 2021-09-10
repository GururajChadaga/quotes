import QuoteList from '../components/quotes/QuoteList';

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
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
