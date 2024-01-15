import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = user => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={user.avatar} alt={user.avatar} className={styles.avatar} />
          <p className={styles.name}>{user.username}</p>
          <p className={styles.tag}>@{user.tag}</p>
          <p className={styles.location}>{user.location}</p>
        </div>

        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{user.stats.followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{user.stats.views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
Profile.propTypes = {
  condition: PropTypes.bool,
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
