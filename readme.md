# Shop node js aws serverless

This project contains all serverless projects for deploy to aws

## Create new service/function

```bash
serverless create --template aws-nodejs-typescript --path product-service
```

## Check functions locally

```bash
serverless invoke local --function hello //With data --data '{"body": {"name":"John"}}' //With custom request --path ./src/functions/getProductsById/mock.json
```

## Working with each service

You should enter into each service folder and execute next operations:

### Deploy

```bash
npm run deploy
```

### Test

```bash
npm run test
```

### Generate swagger json

```bash
  npm run build:doc
```
