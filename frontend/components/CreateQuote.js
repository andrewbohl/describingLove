import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import DisplayError from './ErrorMessage';
import Router from 'next/router';

export const CREATE_QUOTE_MUTATION = gql`
  mutation CREATE_QUOTE_MUTATION(
    $name: String!
    $description: String
    $price: Int!
    $currency: String!
  ) {
    createItem(
      name: $name
      description: $description
      price: $price
      currency: $currency
    ) {
      id
    }
  }
`;

class CreateQuote extends Component {
  state = {
    title: "",
    description: "",
  };
  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={CREATE_QUOTE_MUTATION} variables={this.state}>
        {(mutationFx, { error, loading }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await mutationFx()
              console.log(res);
              Router.push({
                  pathname: '/item',
                  query: { id: res.data.createItem.id },
              });
            }}
          >
              <DisplayError error={error}/>
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="title">
                Name
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="description">
                Description
                <textarea
                  id="description"
                  name="description"
                  placeholder="What is the meaning of this?"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateQuote;
