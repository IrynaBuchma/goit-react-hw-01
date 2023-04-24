import css from './Friends.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline, id }) {
    return (
        <li className={css.friends__item} key={id}>
            <span className={`${css.friends__status} ${css[isOnline]}`}>
                {isOnline}
            </span>
            <img className={css.friends__avatar} src={avatar} alt={name} width="48" />
            <p className={css.friends__name}>{name}</p>
        </li>
    )}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
    }