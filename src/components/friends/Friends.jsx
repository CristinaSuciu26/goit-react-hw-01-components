import styles from './FriendListItem.module.css';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  console.log('friends:', friends);
  return (
    <div>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
