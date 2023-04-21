import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div>
    <div>
      <img src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
    <ul>
      <li>Followers:{stats.followers}</li>
      <li>Views:{stats.views}</li>
      <li>Likes:{stats.likes}</li>
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
