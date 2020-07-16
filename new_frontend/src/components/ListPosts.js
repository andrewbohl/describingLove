import React, { useState, useEffect } from "react";
import Router from 'next/router';

const ListPost = () => {
  const [state, setState] = useState({});
  const getRandomQuote = async () => {
    try {
      const response = await fetch(`http://localhost:4000/post`);
      const { data } = await response.json();
      console.log(data[0]);
      setState(data[0]);
    //   return data[0];
    } catch (error) {
      console.log(error);
    }
  };
  const getNewQuote = () => {
      console.log("Clicked")
    
  }
  // useEffect makes a fetch everytime component is rendered
  useEffect(() => {
    getRandomQuote();
  },[]);

  return (
    <div>
      A(ll) Post(s)
      <p>{state.title}</p>
      <p>{state.description}</p>
      <button onClick={getNewQuote}>Get a new quote</button>
    </div>
  );
};

export default ListPost;
