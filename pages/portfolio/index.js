import React from 'react';
import Axios from 'axios';
import Masonry from 'react-masonry-css'

import Header from '../../components/header';
import Content from '../../components/Layout/content';
import RepoCard from '../../components/RepoCard/RepoCard';

import styles from './index.module.css';

class Portfolio extends React.Component {
  state = {
    repos: [],
    loading: true,
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos = () => {
    const repoUrl = 'https://api.github.com/users/ayaanqui/repos?type=all&sort=updated';
    this.setState({ loading: true });
    Axios.get(repoUrl)
      .then(res => this.setState({ repos: res.data, loading: false }))
      .catch(err => console.log(err));
  };

  renderRepos = () => {
    if (!this.state.loading) {
      const breakpointColumnsObj = {
        default: 2,
        766: 1,
      };

      return (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonry_grid}
          columnClassName={styles.masonry_grid_column}
        >
          {this.state.repos.map(repo => (
            <RepoCard
              owner={repo.owner}
              name={repo.name}
              fullname={repo.fullname}
              description={repo.description}
              htmlUrl={repo.html_url}
              language={repo.language}
              defaultBranch={repo.default_branch}
              private={repo.private}
              forks={repo.forks}
              size={repo.size}
              hasPages={repo.hasPages}
              watchers={repo.watchers}
              id={repo.id}
              key={repo.id}
              pushedAt={repo.pushed_at}
              createdAt={repo.created_at}
            />
          ))}
        </Masonry>
      );
    }
  };

  renderLoading = () => {
    if (this.state.loading)
      return (
        <div className="text-center">
          <span className="spinner-grow text-light"></span>
        </div>
      );
    else
      return;
  };


  render = () => {
    return (
      <Content>
        <Header title='Portfolio' />

        <div className="container mt-5 mb-5">
          <h1>Portfolio</h1>
          <p>Data pulled from GitHub API for <a href="https://github.com/ayaanqui" title="Ayaan's GitHub page">@ayaanqui</a></p>

          <br />

          {this.renderLoading()}
          {this.renderRepos()}
        </div>
      </Content>
    );
  };
};

export default Portfolio;
