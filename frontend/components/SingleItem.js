import React, {Component} from 'react';
import { Query } from 'react-apollo';
import Error from '../components/ErrorMessage';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Head from 'next/head';
import maintheme from '../components/styles/GlobalTheme';


const SingleItemStyles = styled.div`
    max-width: 1200px;
    margin: 2rem auto;
    box-shadow: ${props => props.theme.bs};
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    min-height: 800px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .details {
        margin: 3rem;
        font-size: 2rem;
        background: ${props => props.theme.background_hex};
        color: ${props => props.theme.accent1_hex}
    }
`;



export const SINGLE_QUOTE_QUERY = gql`
    query SINGLE_QUOTE_QUERY($id: Int) {
        quotes(id: $id) {
            id
            title
            description
        }
    }
`;

class SingleItem extends Component {
    
    render() {
        return (
            <Query 
            query={SINGLE_QUOTE_QUERY}
            variables={{
                id: parseInt(this.props.id)
            }}
            >
                {({error, loading, data}) => {
                    if(error) return <Error error={error} />
                    if(loading) return <p>Loading!</p>
                    if(!data.quotes) return <p>No Item found for {this.props.id}</p>
                    const quote = data.quotes
                    return (
                        <SingleItemStyles>
                            <Head>
                                <title> {quote.title}</title>
                            </Head>
                            <div className="details">
                                <h2>Viewing {quote.title}</h2>
                                <p>{quote.description}</p>
                            </div>
                        </SingleItemStyles>
                        
                        );
                }}
                 
            </Query>
           
        )
    }
}
export default SingleItem;