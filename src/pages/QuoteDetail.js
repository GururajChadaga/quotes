import { useParams, useRouteMatch } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import { Link, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments';

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
  const match = useRouteMatch();
  console.log(match);
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <NoQuotesFound />;
  }
  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link to={`${match.url}/comments`} className='btn'>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
