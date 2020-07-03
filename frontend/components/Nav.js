import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>
        <Link href="/items">
            <a>Quotes</a>
        </Link>
        <Link href="/submit">
            <a>Add a Quote</a>
        </Link>
        <Link href="/signup">
            <a>Singup</a>
        </Link>
    </NavStyles>
)
export default Nav;