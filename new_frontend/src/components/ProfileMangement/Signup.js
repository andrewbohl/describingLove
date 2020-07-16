import React, { useState } from "react";
import postData from "../../lib/fetch";

const Signup = () => {
  const [state, setState] = useState({
    name: "",
    email: null,
    password: null,
  });

  const handleChange = async (e) => {
    const { type, value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>
      Signup!
      <form
        method="post"
        onSubmit={async (e) => {
          e.preventDefault();
          // Post to create user
          postData("/user/signup", state)
          .then(res => console.log(res.json()))
          // console.log(response.json());
          // console.log(response.headers);
          // goto user page
        }}
      >
        <fieldset>
          <label htmlFor="Name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={state.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={state.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Signup!</button>
        </fieldset>
      </form>
    </div>
  );
};
export default Signup;
