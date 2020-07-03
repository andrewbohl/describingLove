import React, { Component } from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import StyledQuoteButton from './styles/NewQuoteButton';

const MAX_IDS_QUERY = gql`
    query MAX_IDS_QUERY {
        getAllQuotes {
            id
        }
    }
`;

export default class RandomQuote extends Component{
    render() {
        return (
            <Query 
            query={MAX_IDS_QUERY}
            >
                {({error, loading, data}) => {
                    if(error) return <Error error={error} />
                    if(loading) return <p>Loading!</p>
                    if(!data.getAllQuotes) return <p>No Item found for {this.props.id}</p>
                    let ids = [];
                    data.getAllQuotes.forEach(obj => ids.push(obj.id));
                    let idx = Math.floor(Math.random() * ids.length) + 1;
                    return (
                        <div>
                            <StyledQuoteButton onClick={async e => {
                                Router.push({
                                    pathname: '/item',
                                    query: { id: idx },
                                });
                            }}>
                                Get a new quote!
                            </StyledQuoteButton>
                        </div>
                        );
                }}
            </Query>
        )
    }
};