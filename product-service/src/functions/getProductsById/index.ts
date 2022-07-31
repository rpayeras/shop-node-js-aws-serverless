// import schema from './schema';
import { handlerPath } from "@libs/handler-resolver";

export default {
  memorySize: 512,
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        summary: "Get products by id",
        description: "Returns a product by id",
        swaggerTags: ["Products"],
        method: "get",
        path: "products/{productId}",
        cors: true,
        request: {
          parameters: {
            paths: {
              productId: true,
            },
          },
        },
        consumes: [],
        produces: ["application/json"],
        responseData: {
          200: "Ok response with object",
          400: "Product not found response",
        },
      },
    },
  ],
};
