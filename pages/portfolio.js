import React from 'react';
import Axios from 'axios';

import Header from '../components/header';
import Content from '../components/Layout/content';

class Portfolio extends React.Component {
  state = {
    repos: [],
    loading: true,
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos = () => {
    const repoUrl = 'https://api.github.com/users/ayaanqui/repos';
    this.setState({ loading: true });
    Axios.get(repoUrl)
      .then(res => this.setState({ repos: res.data, loading: false }))
      .catch(err => console.log(err));
  };

  renderRepos = () => {
    if (!this.state.loading) {
      this.state.repos.forEach(repo => console.log(repo.name));
      return (
        <div className="list-group">
          {
            this.state.repos.map(repo => (
              <a href={repo.url} className="list-group-item list-group-item-action">
                {repo.name}
              </a>
            ))
          }
        </div>
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
