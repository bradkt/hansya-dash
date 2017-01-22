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
  stage 'Build and Deploy to test'
  sh 'heroku run -s Standard-2X --exit-code "npm install && aws configure <<!\nAKIAJD2JDOTOZWJHRGSQ\n4WKeCu8LW4o7EQI0ddPF07zYbtSK6DTHEU0wjt4y\nus-east-1\n\n!\n gulp build && aws s3 cp release/* s3://bucketeer-d89c87a6-7073-4603-bd65-7bdd75831a5b/public"'
}
