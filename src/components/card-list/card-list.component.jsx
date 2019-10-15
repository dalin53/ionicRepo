import React from 'react';
import './card-list.style.css';
import { CardItem} from '../card-list/card-item/card-item.component';
export const CardList = (props) => {
    return (
        <div className="card-list">
            {
                props.monsters.map(monster => <CardItem key={monster.id} monster={monster} />)
            }
        </div>
    );
};
