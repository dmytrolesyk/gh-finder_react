import React, { useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

const Users = () => {
  const githubContext = useContext(GithubContext);
  return (
    !githubContext.loading
    ? <div style={userStyle}>
        {githubContext.users.map(user => (
          <UserItem
            key={user.id}
            user={user}
          />
      ))}
    </div>
    : <Spinner />
  );
}

export default Users;