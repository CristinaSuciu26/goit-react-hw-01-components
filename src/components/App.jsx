import Profile from './profile/Profile';
import user from './user.json';
import Statistic from './statistics/Statistics';
import data from './data.json';
import friends from './friends.json';
import FriendList from './friends/Friends';
import transactions from './transactions.json';
import TransactionHistory from './transactions/Transactions';

export const App = () => {
  console.log('transactions:', transactions);
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistic title="Upload Stats" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
