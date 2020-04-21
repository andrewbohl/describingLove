import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal, createGlobalStyle }  from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offwhite: '#EDEDED',
    maxwidth: '1000px',
    bs: '0 12px 24px 0 rba(0, 0, 0, 0.09)'
};

const StylePage = styled.div`
    background: ${theme.offwhite};
    color: ${theme.black};
`;

const Inner = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
`;


export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.black}
    }
`;

export default class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StylePage>
                    <Meta />
                    <Header />
                    <GlobalStyle />
                    <Inner>{this.props.children}</Inner>
                </StylePage>
                
            </ThemeProvider>
        )
    }
}