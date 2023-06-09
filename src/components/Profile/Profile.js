import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers: </span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views: </span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes: </span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
