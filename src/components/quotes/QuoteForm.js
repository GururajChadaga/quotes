import { useState } from 'react';
import { Prompt, useHistory } from 'react-router-dom';
import { Fragment } from 'react';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import quotesSlice from '../../store/quotes-slice';
import { useDispatch } from 'react-redux';

const QuoteForm = (props) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [isEntering, setIsEntering] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitFormHandler = (event) => {
    event.preventDefault();

    // TODO: Add form validation
    dispatch(quotesSlice.actions.addQuote({ author, text }));
    history.push('/quotes');

    // props.onAddQuote({ author, text });
    setAuthor('');
    setText('');
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const textChangeHandler = (event) => {
    setText(event.target.value.trim());
  };

  const formFocusHandler = () => {
    setIsEntering(true);
  };

  const formBlurHandler = () => {
    if (author.trim() === '' && text.trim() === '') {
      setIsEntering(false);
    }
  };

  const finishedFormHandler = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={() => 'Are you sure? Your entered data will be lost'}
      />
      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          onFocus={formFocusHandler}
          onBlur={formBlurHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input
              type='text'
              id='author'
              value={author}
              onChange={authorChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea
              id='text'
              rows='5'
              value={text}
              onChange={textChangeHandler}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn' onClick={finishedFormHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
