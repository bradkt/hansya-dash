node{
  stage 'Checkout'
  checkout scm
  sh 'git checkout master'
//  stage 'Install dependencies'
//  sh 'export NPM_CONFIG_PRODUCTION=false && npm install'
  stage 'Deploy to dev heroku'
  sh 'heroku config:set NPM_CONFIG_PRODUCTION=false -a dev-hansya-dashboard'
  sh 'heroku config:set NODE_ENV=ci -a dev-hansya-dashboard'
  sh 'heroku git:remote -a dev-hansya-dashboard'
  sh 'git push heroku master'
//  stage 'Turn off dyno instance'
//  sh 'heroku ps:scale web=0 -a dev-hansya-dashboard'
  stage 'Run CI tests on heroku'
  ////////////////////////////////////////////////////////////////////////////////////
  // BYPASS UNTIL WE CAN RUN TESTS
  ////////////////////////////////////////////////////////////////////////////////////
  //sh 'heroku run --exit-code "npm install && npm run test" -a dev-hansya-dashboard'
  stage 'Build & Deploy to test'
  sh 'heroku run -s 2x --exit-code "npm install && aws configure <<!\nAKIAJD2JDOTOZWJHRGSQ\n4WKeCu8LW4o7EQI0ddPF07zYbtSK6DTHEU0wjt4y\nus-east-1\n\n!\n gulp build && aws s3 cp release/* s3://bucketeer-d89c87a6-7073-4603-bd65-7bdd75831a5b/public"'
}
