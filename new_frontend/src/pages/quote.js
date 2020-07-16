import React, { Fragment } from "react";
import Quote from "../components/Quote";
import ListPost from '../components/ListPosts';

const QuotePage = (props)=>{
  return (
    <div>
      <Quote id={props.query.id}/>
    </div>
  );
}
export default QuotePage;