import Profile from "./Profile";
import users from "../user.json";
import Statistics from "./Statistics";
import data from "../data.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
          followers={users[0].stats.followers}
          views={users[0].stats.views}
          likes={users[0].stats.likes}
      />
        <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

