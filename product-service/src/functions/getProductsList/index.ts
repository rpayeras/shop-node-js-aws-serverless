// import schema from './schema';
import { handlerPath } from "../../libs/handler-resolver";

export default {
  memorySize: 512,
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        summary: "Get a list of products",
        description: "Get a list of products with all their properties",
        swaggerTags: ["Products"],
        method: "get",
        path: "products",
        cors: true,
        request: {
          // schemas: {
          //   'application/json': schema,
          // },
        },
        consumes: [],
        produces: ["application/json"],
        responseData: {
          200: "Ok response with object",
        },
        authorizer: {
          name: "cognitoAuthorizer",
          type: "COGNITO_USER_POOLS",
          arn: "arn:aws:cognito-idp:eu-west-1:471876932224:userpool/eu-west-1_R6xeCKBRS",
        },
      },
    },
  ],
};
