import React, { Component } from "react";
import { Mutation, Query} from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import DisplayError from '../components/ErrorMessage';


export const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: Int) {
        quotes(id: $id) {
            id
            title
            description
        }
    }
`;

export const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: Int!
    $name: String
    $description: String
    $price: Int
    $currency: String
  ) {
    updateItem(
      id: $id
      name: $name
      description: $description
      price: $price
      currency: $currency
    ) {
      id
      name
      description
      price
      currency
    }
  }
`;



class UpdateItem extends Component {
  state = {};
  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    console.log("Updating Item");
    console.log(this.state);
    const res = await updateItemMutation({
        variables : {
            id: parseInt(this.props.id),
            ...this.state
        }
    })
};

  render() {
    return (
      <Query 
      query={SINGLE_ITEM_QUERY} 
      variables={{id: parseInt(this.props.id)}}>
      {({data, loading},) => {
          if(loading) return <p>Loading...</p>;
          console.log(data);
          console.log(this.props)
          return (

      <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
        {(mutationFx, { error, loading }) => (
          <Form
            onSubmit= {e => this.updateItem(e, mutationFx)}>
              <DisplayError error={error}/>
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Item Name"
                  required
                  defaultValue={data.item.name}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="description">
                Description
                <textarea
                  id="description"
                  name="description"
                  placeholder="What does this item do"
                  required
                  defaultValue={data.item.description}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="price">
                Price
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="price"
                  required
                  defaultValue={data.item.price}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="currency">
                Currency
                <select
                  type="text"
                  id="currency"
                  name="currency"
                  required
                  defaultValue={data.item.currency}
                  onChange={this.handleChange}
                >
                  <option value="gp">gp</option>
                  <option value="sp">sp</option>
                  <option value="cp">cp</option>
                  <option value="ep">ep</option>
                  <option value="pp">pp</option>
                </select>
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
          )
        }}
        </Query>
    );
  }
}

export default UpdateItem;
