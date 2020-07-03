import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import Link from 'next/link';
import DeleteItem from './DeleteItem';

export default class Item extends Component {
    static propTypes = {
        item: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }),

    }

    render () {
        const { item } = this.props;
        return (
            <ItemStyles>
                {item.image && <img src={item.image} alt={item.name} />}
                <Title>
                    <Link href={{
                        pathname: '/item',
                        query: {id: item.id},
                        }}>
                        <a>{item.name}</a>
                    </Link>
                    <p>
                        {item.description}
                    </p>
                    <div className="buttonList">
                        <Link href={{
                            pathname: 'update',
                            query: {id: item.id},
                        }}>
                            <a>Edit</a>
                        </Link>
                        <DeleteItem id={item.id}>Delete This Item</DeleteItem>
                    </div>
                </Title>
                
            </ItemStyles>
        )
    }
}