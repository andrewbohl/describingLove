import React, {Component} from 'react';
import {Mutation, ApolloProvider} from 'react-apollo';
import gql from 'graphql-tag';
import {ALL_ITEMS_QUERY} from './Items';

const DELETE_ITEM_MUTATION = gql`
    mutation DELETE_ITEM_QUERY($id: Int!) {
        deleteItem(id: $id) {
            id
        }
    }
`;

class DeleteItem extends Component {
    update = (cache, payload) => {
        //manually update cache on client so it matches server
        // read cache for items we want
        const data = cache.readQuery({query: ALL_ITEMS_QUERY});
        data.getAllItems = data.getAllItems.filter(item => item.id !== payload.data.deleteItem.id);
        cache.writeQuery({query: ALL_ITEMS_QUERY, data});
    };
    render () {
        return (
            <Mutation 
                mutation={DELETE_ITEM_MUTATION} 
                variables={{id: this.props.id}}
                update={this.update}>
                {(deleteItem, {error}) => (
                
                <button onClick={()=>{
                    if(confirm('Are you sure you want to delete?')) {
                        deleteItem();
                    }
                }}>{this.props.children}
                </button>
                )}
                
            </Mutation>
        )
    }
} 

export default DeleteItem;