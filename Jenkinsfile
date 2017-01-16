node{
  stage 'Checkout'
  checkout scm
  sh 'git checkout master'
  stage 'Install dependencies'
  sh 'NPM_CONFIG_PRODUCTION=false && npm install'
  stage 'Deploy to dev heroku'
  sh 'heroku config:set NPM_CONFIG_PRODUCTION=false -a dev-hansya-dashboard'
  sh 'heroku config:set NODE_ENV=ci -a dev-hansya-dashboard'
  sh 'heroku git:remote -a dev-hansya-dashboard'
  sh 'git push heroku master'
  stage 'Turn off dyno instance'
  sh 'heroku ps:scale web=0 -a dev-hansya-dashboard'
  stage 'Run CI tests on heroku'
  ////////////////////////////////////////////////////////////////////////////////////
  // BYPASS UNTIL WE CAN RUN TESTS
  ////////////////////////////////////////////////////////////////////////////////////
  //sh 'heroku run --exit-code "npm install && npm run test" -a dev-hansya-dashboard'
  stage 'Build App'
  sh 'gulp serve:dist'
  stage 'Deploy to Test'
  sh 'aws s3 cp dist/* s3://bucketeer-d89c87a6-7073-4603-bd65-7bdd75831a5b/public'
}
