# Stack using Yeoman 1.0.0-beta.4, Express 3.1.0 and AngularJS

This is a template project which integrates Yeoman and NodeJS+ExpressJS together.

## Installation

1. Clone the repository
1. Open a terminal window, go to the cloned directory and run <code>npm install</code>
1. Go to the 'client' folder and run <code>npm install && bower install</code>.
1. Still in the 'client' folder runs <code>grunt server</code>

## Testing
If you want to run the tests, use <code>grunt test</code> inside the 'client' folder.

## Distribution
If you want to generate a distribution for your app, runs the <code>grunt build</code> inside the 'client' folder.srm

ExpressJS uses a environment variable called NODE_ENV to control which enviroment will be loaded. Double check when deploying to your production server to set NODE_ENV variable to 'production' in order to instruct ExpressJS to load the minified and concatenated files.

Also, this template contains a Procfile ready to be used on Heroku. You'll just need to add a remote which points to a valid Heroku project and everything should work.
