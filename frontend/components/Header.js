import Nav from './Nav';
import styled from 'styled-components';
import Router from 'next/router';

Router.onRouteChangeStart = () => {
    console.log('Router change start');
    console.log('Should have started');
};
Router.onRouteChangeComplete = () => {
    console.log('Router change end');
    // Change theme color
};
Router.onRouteChangeError = () => {

};

const StyleHeader = styled.header`
    .bar {
        background: ${props => props.theme.background_hex};
        color: ${props => props.theme.accent1_hex};   
        border-bottom: 10px solid ${props => props.theme.accent1_hex};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (max-width: 1300px) {
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }
    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 2px solid ${props => props.theme.black};
    }
`;

const Logo = styled.h1`

    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        padding: 0.5rem 1rem;
        background: ${props => props.theme.background_hex};
        color: white;
        text-transform: uppercase;
        text-decoration: none;
    }
    @media (max-width: 900px) {
        margin: 0px;
        text-align: center;
    }
`;



const Header = () => (
        <StyleHeader>
            <div className="bar">
                <Nav /> 
            </div>
        </StyleHeader>
)
export default Header;