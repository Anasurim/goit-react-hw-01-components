import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload status" stats={data}></Statistics>
    </div>
  );
};
