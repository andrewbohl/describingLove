import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import Logout from './ProfileMangement/Logout';
import User from "./ProfileMangement/User";

Router.onRouteChangeStart = () => {
    console.log('Router change start');
};
Router.onRouteChangeComplete = () => {
    console.log('Router change end');
};


const StyleHeader = styled.header`
    .bar {
        background: white;
        color: black;
        border-bottom: 10px solid black;
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
        border-bottom: 2px solid black;
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
        background: black;
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
    <User>
        {({ data }) => {
            console.log(data);
      const me = data ? data.me : null;
      return (
        <StyleHeader>
            <div className="bar">
                <Logo>
                    <Link href="/">
                        <a>Home Page</a>
                    </Link>
                </Logo>
            </div>
            <div className="sub-bar">
                <Link href="/quote">
                    <a>Quotes</a>
                </Link>
                <Link href="/addQuote">
                    <a>Add A Quote</a>
                </Link>
                <Link href="/signup">
                    <a>Signup</a>
                </Link>
                <Logout />
                
            </div>
        </StyleHeader>
        );
      }}
    </User>
)
export default Header;