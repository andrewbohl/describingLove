import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal, createGlobalStyle }  from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';
import maintheme, { StylePage, Inner } from './styles/GlobalTheme';
import Router from 'next/router';



const new_colors = [
//     //light: dark:
    {		
        background_hex: '#ff6666',
        text_hex: '#000000',
        accent1_hex: '#ff0066',
        accent2_hex: '#330014',
        accent3_hex: '#800033',
    },
    {
        background_hex: '#66ffcc',
        text_hex: '#000000',
        accent1_hex: '#004d33',
        accent2_hex: '#ccff22',
        accent3_hex: '#001a11',
    }
]

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

const DynamicDiv = styled.div`
        background: ${({ theme }) => theme.background_hex},
        text_hex: ${({ theme }) => theme.text_hex},
        accent1_hex: ${({ theme }) => theme.accent1_hex},
        accent2_hex: ${({ theme }) => theme.accent2_hex},
        accent3_hex: ${({ theme }) => theme.accent3_hex},
`;

// var first=null
// var theme= first ? maintheme :  theme
// first = true

var theme = maintheme

Router.onRouteChangeStart = () => {
    console.log('Router change start');
    console.log('Should have started');
    //theme.background_hex = new_colors[Math.floor(new_colors.length * Math.random())].background_hex
};
Router.onRouteChangeComplete = () => {
    console.log('Router change end');
};
Router.onRouteChangeError = () => {
    console.log('error');
};

export default class Page extends Component {
    constructor() {
            super();
            this.state = {
            name: 'React',
            theme: theme
            };
        }
    componentDidUpdate(){
        console.log('Did update');
        console.log(this.state.theme);
        // theme.background_hex = new_colors[Math.floor(new_colors.length * Math.random())]
        // this.setState(
        //     prevTheme => ({
        //         theme: {
        //             ...prevTheme,
        //             background_hex: new_colors[Math.floor(new_colors.length * Math.random())]
        //         }
        //     }))

    }
    render() {
        return (
            <ThemeProvider theme={theme}>
               <DynamicDiv>
                    <Meta />
                    <Header />
                    <GlobalStyle />
                    <Inner>{this.props.children}</Inner>
               </DynamicDiv>
                
            </ThemeProvider>
        )
    }
}