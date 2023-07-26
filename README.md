# NodeJS_Express_MongoDB-Sample1

## How to run the MongoDB docker container
Download the MongoDB docker container with the command:

```
docker pull mongo
```

and after downloading the MongoDB container then execute it with the command:

```
docker run -d -p 27017:27017 --name MongoDB mongo
```

## How to run the application

Install the package.json dependencies with the command:

```
npm install
```

This is my "package.json" file:

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongodb": "^5.7.0",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.0"
  }
}
```

Run the application with the command:

```
node app.js
```
