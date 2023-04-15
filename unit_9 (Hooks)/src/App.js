import './App.css';
import React from 'react';
// import Button from './Button';
import PlaceholderPost from './PlaceholderPost';
import PlaceholderPostHook from './PlaceholderPostHook';
import CommentHook from './CommentHook';
import Comment2Hook from './Comment2Hook';
// import Comment from './Comment';
// import Comment2 from './Comment2';


function App() {
  return (
    <>
      {/* <PlaceholderPost /> */}
      {/* <Comment/> */}
      <PlaceholderPostHook />
      <CommentHook />
      <Comment2Hook />
    </>
  );
}

export default App;
