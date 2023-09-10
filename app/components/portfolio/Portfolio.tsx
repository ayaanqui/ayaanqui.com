"use client";

import React, { useEffect, useState } from "react";
import Axios from "axios";
import Masonry from "react-masonry-css";
import RepoCard from "./repo-card/RepoCard";

import styles from "./portfolio.module.css";

export const languages = [
  "All",
  "TypeScript",
  "Go",
  "JavaScript",
  "Java",
  "C#",
  "C++",
  "C",
];

function ghApiUrl(username: string, perPage: number, language: string): string {
  return `https://api.github.com/users/${username}/repos?type=all&sort=updated&per_page=${perPage}&language=${language}`;
}

export default function PortfolioComponent() {
  const [loading, setLoading] = useState(true);
  const [failedLoading, setFailedLoading] = useState(false);
  const [repos, setRepos] = useState<any[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const repoUrl = ghApiUrl("ayaanqui", 50, selectedLanguage.toLowerCase());
    setLoading(true);

    Axios.get(repoUrl)
      .then((res) => {
        setRepos(res.data);
        setLoading(false);
        setFailedLoading(false);
      })
      .catch((_) => {
        setLoading(false);
        setRepos([]);
        setFailedLoading(true);
      });
  }, []);

  const renderRepos = () => {
    if (loading) return <></>;

    const breakpointColumnsObj = {
      default: 2,
      766: 1,
    };

    let filteredRepos: any[] = [];
    if (selectedLanguage === "All") {
      filteredRepos = repos.slice(0, 5);
    } else {
      filteredRepos = repos
        .filter((repos) => repos.language === selectedLanguage)
        .slice(0, 5);
    }

    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonry_grid}
        columnClassName={styles.masonry_grid_column}
      >
        {filteredRepos.map((repo) => (
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

  const renderLoading = () => {
    if (loading)
      return (
        <div className="text-center">
          <span className="spinner-grow text-light"></span>
        </div>
      );
    else if (failedLoading) {
      return (
        <div className="text-center mt-5">
          <p>
            <b>Failed to load content from GitHub</b>
          </p>
        </div>
      );
    }
  };

  const renderLanguagesButtons = () => {
    const button = (lang: string) => {
      const active = selectedLanguage === lang ? "active" : "";
      return (
        <button
          type="button"
          className={`btn btn-dark btn-sm ${styles.languageButton} ${active}`}
          key={lang}
          onClick={(_e) => setSelectedLanguage(lang)}
        >
          {lang}
        </button>
      );
    };

    return <div>{languages.map((lang) => button(lang))}</div>;
  };

  return (
    <div className="container mt-5 mb-5">
      {renderLanguagesButtons()}

      <br />

      {renderLoading()}
      {renderRepos()}

      <p className="mt-10">
        Data pulled via{" "}
        <i>
          <a
            className="link"
            href="https://developer.github.com/v3/"
            target="_blank"
          >
            GitHub API v3
          </a>
        </i>
      </p>
    </div>
  );
}
