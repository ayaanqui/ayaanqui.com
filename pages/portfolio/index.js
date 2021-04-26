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
    failedLoading: false,
    language: ''
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos = () => {
    const repoUrl = 'https://api.github.com/users/ayaanqui/repos?type=all&sort=updated';
    this.setState({ loading: true });
    Axios.get(repoUrl)
      .then(res => this.setState({ repos: res.data, loading: false }))
      .catch(_ => this.setState({ loading: false, failedLoading: true }));
  };

  renderRepos = () => {
    if (this.state.loading)
      return;

    const breakpointColumnsObj = {
      default: 2,
      766: 1,
    };

    let repos = [];
    if (this.state.language === '')
      repos = this.state.repos;
    else
      repos = this.state.repos.filter(repos => repos.language === this.state.language);

    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonry_grid}
        columnClassName={styles.masonry_grid_column}
      >
        {repos.map(repo => (
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
  };

  renderLoading = () => {
    if (this.state.loading)
      return (
        <div className="text-center">
          <span className="spinner-grow text-light"></span>
        </div>
      );
    else if (this.state.failedLoading) {
      return (
        <div className="text-center mt-5">
          <p><b>Failed to load content from GitHub</b></p>
        </div>
      );
    }
  };

  languageButtonAction = lang => {
    this.setState({ language: lang });
  };

  renderLanguagesButtons = () => {
    if (this.loading || this.failedLoading)
      return;

    const languagesSet = new Set();
    const languages = new Array(10);
    this.state.repos.forEach(repo => {
      const lang = repo.language;
      if (!languagesSet.has(lang) && lang != null) {
        languages.push(lang);
        languagesSet.add(lang);
      }
    });

    const button = lang => {
      const active = this.state.language === lang ? 'active' : '';
      return (
        <button
          type="button"
          className={`btn btn-dark ${styles.languageButton} ${active}`}
          key={lang}
          onClick={(e) => this.languageButtonAction(lang)}
        >
          {lang === '' ? 'All' : lang}
        </button>
      );
    };

    return (
      <div>
        {button('')}
        {languages.map(lang => button(lang))}
      </div>
    );
  };

  render = () => {
    return (
      <Content>
        <Header title='Portfolio' />

        <div className="container mt-5 mb-5">
          <h1>Portfolio</h1>
          <p>Data pulled via <i><a className="link" href="https://developer.github.com/v3/" target="_blank">GitHub API v3</a></i></p>

          {this.renderLanguagesButtons()}

          <br />

          {this.renderLoading()}
          {this.renderRepos()}
        </div>
      </Content>
    );
  };
};

export default Portfolio;
