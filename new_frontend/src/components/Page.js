import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

const StylePage = styled.div`
    background: white;
    color: black;
`;

const Inner = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
`;

export default class Page extends Component {
    render() {
        return (
                <StylePage>
                    <Meta />
                    <Header />
                    <Inner>{this.props.children}</Inner>
                </StylePage>
        )
    }
}