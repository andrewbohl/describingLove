import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>
        <Link href="/items">
            <a>Items</a>
        </Link>
        <Link href="/roll">
            <a>Roll</a>
        </Link>
        <Link href="/signup">
            <a>Singup</a>
        </Link>
        <Link href="/orders">
            <a>Orders</a>
        </Link>
        <Link href="/player">
            <a>PlayerSheet</a>
        </Link>
    </NavStyles>
)
export default Nav;