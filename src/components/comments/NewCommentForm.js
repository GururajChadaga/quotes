import { useState } from 'react';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const [comment, setComment] = useState('');
  const submitFormHandler = (event) => {
    event.preventDefault();

    // todo: Could validate here

    // send comment to server
    console.log(comment);
    setComment('');
  };
  const commentChangeHandler = (event) => {
    setComment(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea
          id='comment'
          rows='5'
          value={comment}
          onChange={commentChangeHandler}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
