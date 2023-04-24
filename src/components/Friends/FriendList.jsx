import css from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
    return (
        <div className={css.friends}>
          <ul className={css.friends__list}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return(
                    <div>
                        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
                    </div>
                )
            })}
          </ul>
        </div>
      );
    };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(Object).isRequired,
    }