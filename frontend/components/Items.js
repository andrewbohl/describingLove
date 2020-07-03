import React, {Component} from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

const Center = styled.div`
    text-align: center;
`;

const ItemsList = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grip-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

export const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        getAllQuotes {
            id
            title
            description
        }
    }
`;

export default class Items extends Component {
    render() {
        return (
            <Center>
                <Query query={ALL_ITEMS_QUERY}>
                    {({data, error, loading}) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error: {error.message}</p>;
                        return <ItemsList>
                            {data.getAllQuotes.map(item => 
                                <Item item={item} key={item.id}/>)}
                            </ItemsList>;
                    }}
                </Query>
            </Center>
        )
    }
}