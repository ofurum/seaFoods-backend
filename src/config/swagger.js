const swaggerJSDoc = require("swagger-jsdoc");


const swaggerDefinition = {
  info: {
    title: 'seafoods API Docs', // Title of the documentation
    version: "1.0.0", // Version of the app
    description: 'This is the REST API for seafoods app', // short description of the app
  },
  host: 'localhost:8000', // the host or url of the app
  basePath: "/", // the basepath of your endpoint
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ["./src/docs/*.yaml"],
};
// initialize swagger-jsdoc
module.exports = swaggerJSDoc(options);
