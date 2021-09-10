import { useState } from 'react';
import { Prompt } from 'react-router-dom';
import { Fragment } from 'react';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [isEntering, setIsEntering] = useState(false);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // TODO: Add form validation
    console.log({ author, text });

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
            <button className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
