# portfolio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### ENV configuration
- Creating .env
- This Project is using https://airtable.com AS CMS and RestFul APIs
- Please add your keys as:
- - VUE_APP_API_KEY: API key from air table
- - VUE_APP_BASE_API_URL: API Base URL
- - VUE_APP_ID: air table app ID
- - Air table name: Hosting. You can change to any
- - Air table schema:
title: String,
slug: String,
ram: String,
storage: String,
transfer: String,
cpu: String,
networkOut: String,
priceText: String,
description: String