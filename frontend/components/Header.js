import Nav from './Nav';
import styled from 'styled-components';
import Link from 'next/Link';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    console.log('Router change start');
    NProgress.start();
    console.log('Should have started');
};
Router.onRouteChangeComplete = () => {
    console.log('Router change end');
    NProgress.done();
};
Router.onRouteChangeError = () => {

};

const StyleHeader = styled.header`
    
    .bar {
        background: ${props => props.theme.lightgrey};
        color: ${props => props.theme.black};   
        border-bottom: 10px solid ${props => props.theme.black};
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
        background: ${props => props.theme.black};
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
                <Logo>
                    <Link href="/">
                        <a>Home Page</a>
                    </Link>
                </Logo>
                <Nav /> 
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
            <div>Cart</div>
        </StyleHeader>
)
export default Header;