import { useState } from 'react';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [addComment, setAddComment] = useState(false);

  const startAddingCommentHandler = () => {
    setAddComment(true);
  };
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!addComment && (
        <button className='btn' onClick={startAddingCommentHandler}>
          Add a Comment
        </button>
      )}
      {addComment && <NewCommentForm />}
      {/* Show comments */}
    </section>
  );
};

export default Comments;
