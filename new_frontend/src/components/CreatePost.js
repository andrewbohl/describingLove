import React, { useState } from "react";
import CreatePostForm from "../styles/createPost";
import postData from "../lib/fetch";

const CreatePost = () => {
  const [state, setState] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);
  const handleFormChange = (e) => {
    const { id, type, value } = e.target;
    const val = value;
    setState({ ...state, [id]: val });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    const data = { state };
    postData("/post/create", data);
  };

  return (
    <div>
      Create Post
      <CreatePostForm
        onSubmit={async (e) => {
            const data = state ;
            console.log(data);
          e.preventDefault();
          postData("/post/create", data);
          
        }}
      >
        <fieldset disbaled={loading} aria-busy={loading}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="title"
            value={state.title}
            onChange={handleFormChange}
          />
          <label htmlFor="description">Quote</label>
          <input
            type="text"
            id="description"
            placeholder="What does it mean to you"
            value={state.description}
            onChange={handleFormChange}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </CreatePostForm>
    </div>
  );
};

export default CreatePost;
