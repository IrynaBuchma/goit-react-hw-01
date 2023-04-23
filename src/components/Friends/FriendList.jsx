import css from './Friends.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    return (
        <div className={css.friends}>
            <ul className={css.friends__list}>
                {friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <li className={css.friends__item} key={id}>
                            <span className={css.friends__status}>
                                {isOnline}
                            </span>
                            <img className={css.friends__avatar} src={avatar} alt={name} width="48" />
                            <p className={css.friends__name}>{name}</p>
                        </li>
                    )
                })}
            </ul> 
        </div>
    )
}

FriendList.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
};