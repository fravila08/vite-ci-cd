# Intro to E2E Testing

## Part I: GH Pages

- What are Github Pages?
  - What are Static Sites?
  - why github pages?
  - limitations to github pages?
- How does a react application look in deployment
- Deploying your app
  - installing gh-pages in npm
  - configuring `package.json`
  - deploy
- Handling routing
  - Vite Environment variables
  - Conditional Router
- Deploy your application

1. Updated vite.config.js to include baseUrl matching repository name
2. Enable GH pages on the Github Repository under settings
4. change router to createHashRouter
5. install `gh-pages`
6. Added deploy command onto `package.json`
7. build the application with `npm run build`
8. deploy `npm run deploy`

## Part II: 

- Continuous Integration
- CI workflow with Cypress
- Continuous Deployment
  - handling github authentication
