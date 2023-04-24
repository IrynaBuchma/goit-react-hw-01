import css from "./Profile.module.css";
import defaultImage from '../../images/default.webp';
import PropTypes from 'prop-types'; // ES6


export default function Profile({ username, tag, location, avatar = defaultImage, stats }) {
    return (
            <div className={css.profile}>
            <div className={css.description}>
                <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
                width="800"
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{stats.likes}</span>
                </li>
            </ul>
            </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}