import React, { useState, useEffect } from "react";
import Head from "next/head";
import SingleQuoteDiv, { SingleQuoteButton } from "../styles/SingleQuoteDiv";
import Router from "next/router";

const Quote = (props) => {
  const [state, setState] = useState({
    loading: false,
    quote: {},
  });
  useEffect(() => {
    setState({ loading: true });
    fetch(`http://localhost:4000/post/id=${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setState({
          ...state,
          quote: { ...data.data },
        });
      });
  }, [setState]);

  const getNewQuote = async (e) => {
    // GET a new id
    const response = await fetch(`http://localhost:4000/post/random`);
    const { data } = await response.json();
    console.log(data);

    // Router.push that new id
    Router.push({
      pathname: "/quote",
      query: { id: data.id },
    });
    setState({...state, quote: data})
  };
  //   };

  if (state.loading) {
    return <p>Data is loading</p>;
  } else {
    return (
      <SingleQuoteDiv>
        <Head>
          <title>Describing Love - {state.quote.title}</title>
        </Head>
        <h2>{state.quote.title}</h2>
        <p>{state.quote.description}</p>
        <SingleQuoteButton onClick={getNewQuote}>New Quote</SingleQuoteButton>
      </SingleQuoteDiv>
    );
  }
};

export default Quote;
