import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name }) => {
  const statusStyle = {
    backgroundColor: isOnline ? 'green' : 'red',
  };
  return (
    <div className={styles.container}>
      <li className={styles.item}>
        <span className={styles.status} style={statusStyle}>
          {isOnline}
        </span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{name} </p>
      </li>
    </div>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
