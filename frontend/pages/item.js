import SingleItem from '../components/SingleItem';
import RandomQuote from '../components/RandomPage';

const Item = props => (
    <div>
        <RandomQuote />
        <SingleItem id={props.query.id}/>
    </div>
)

export default Item;