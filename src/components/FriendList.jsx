import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    return (
        <div className="friends">
            <ul className="friends__list">
                {friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <li className="friends__item" key={id}>
                            <span className="friends__status">
                                {isOnline}
                            </span>
                            <img className="avatar" src={avatar} alt={name} width="48" />
                            <p className="name">{name}</p>
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