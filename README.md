# salesforce-visual-documentation

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run dev
```

### Compiles and minifies for production
```
yarn run local:prestart
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploy to Heroku

### Setup
- Make sure to install heroku cli [link](https://devcenter.heroku.com/articles/heroku-cli)
- Create a heroku app
```
$ heroku create <app-name>
Creating ⬢ <app-name>... done
https://<app-name>.herokuapp.com/ | https://git.heroku.com/<app-name>.git
```
- Configure the new app
```
$ heroku config:set NODE_ENV=production --app <app-name>
Setting NODE_ENV and restarting ⬢ <app-name>... done, v3
NODE_ENV: production
```
- Add the Heroku remote repository
```
$ heroku git:remote --app <app-name>
set git remote heroku to https://git.heroku.com/<app-name>.git
```
- Deploy to heroku
```
$ git push heroku master
```
- Bonus: deploy a branch to heroku
```
$ git push heroku <my-branch-name>:master
```
- Bonus: get logs from heroku
```
$ heroku logs --tail
```
