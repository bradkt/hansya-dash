node{
  stage 'Checkout'
  checkout scm
  sh 'git checkout master'
  stage 'Deploy to dev heroku'
  sh 'heroku config:set NPM_CONFIG_PRODUCTION=false -a dev-hansya-dashboard'
  sh 'heroku config:set NODE_ENV=ci -a dev-hansya-dashboard'
  sh 'heroku git:remote -a dev-hansya-dashboard'
  sh 'git push heroku master'
  stage 'Turn off dyno instance'
  sh 'heroku ps:scale web=0 -a dev-hansya-dashboard'
  stage 'Run CI tests on heroku'
  sh 'heroku run --exit-code "npm install && npm run test" -a dev-hansya-dashboard'
  //need to figure out if we can use fastly.  if not, we will have to use bucketeer to proxy to S3.
}
