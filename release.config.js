module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/aaron-lam/github-actions-example",
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ]
};
