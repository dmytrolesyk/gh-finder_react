import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

const User = ({
  match: { params: { login: paramsLogin } },
}) => {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.getUser(paramsLogin);
    githubContext.getUserRepos(paramsLogin);
  }, []);
  const {
    name,
    avatar_url,
    company,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = githubContext.user;

  if (githubContext.loading) {
    return <Spinner />
  }
  return (
    <>
      <Link to="/" className="btn btn-light">Back to Search</Link>
      Hireable: {' '}
      {hireable 
      ? <span className="fas fa-check text-success"></span>
      : <span className="fas fa-times-circle text-danger"></span>}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && <>
            <h3>Bio</h3>
            <p>{bio}</p>
          </>}
          <a
            href={html_url}
            className="btn btn-dark my-1"
          >
            Visit Github Profile
          </a>
          <ul>
            <li>
              <strong>Username: </strong> {login}
            </li>
            <li>
              {company && <>
                <strong>Company</strong> {company}
              </>}
            </li>
            <li>
              {blog && <>
                <strong>Website</strong> {blog}
              </>}
            </li>
          </ul>
        </div>
      </div>
      
      <div className="card text-center">
        <div className="badge badge-primary">
          Followers: {followers}
        </div>
        <div className="badge badge-success">
          Following: {following}
        </div>
        <div className="badge badge-white">
          Public Repos: {public_repos}
        </div>
        <div className="badge badge-dark">
          Public Gists: {public_gists}
        </div>
      </div>
      
      <Repos repos={githubContext.repos}/>
    </>
  );
}

export default User
