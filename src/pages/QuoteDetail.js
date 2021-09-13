import { useParams, useRouteMatch } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import { Link, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments';
import { useSelector } from 'react-redux';

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const quotes = useSelector((state) => state.quotes);
  const quote = quotes.find((quote) => quote.id === params.quoteId);
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
