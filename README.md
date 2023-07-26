# NodeJS_Express_MongoDB-Sample1

## How to run the MongoDB docker container
Download the MongoDB image.
```
docker pull mongo
```

Then run the docker container:

```
docker run -d -p 27017:27017 --name mongodb mongo
```

## How to run the application

Install the package.json dependencies withe the command:

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

Run the applicaiton with the command:

```
node app.js
```
