import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./Transactions/TransactionHistory";
import users from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: 370,
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <Profile
          username={users[0].username}
          tag={users[0].tag}
          location={users[0].location}
          avatar={users[0].avatar}
          stats={users[0].stats}
      />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
  );
};

