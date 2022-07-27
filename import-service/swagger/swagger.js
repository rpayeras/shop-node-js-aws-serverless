// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "Import Products service",
    "version": "1"
  },
  "paths": {
    "/import": {
      "get": {
        "summary": "Imports a csv file with products",
        "description": "Returns a product by id",
        "tags": [
          "Import Products"
        ],
        "operationId": "importProductFile.get.import",
        "consumes": [],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "name",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "File uploaded successfully"
          },
          "400": {
            "description": "Failed on upload",
            "schema": {
              "$ref": "#/definitions/Error message"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "Response": {
      "properties": {
        "statusCode": {
          "title": "Response.statusCode",
          "type": "number"
        },
        "headers": {
          "additionalProperties": {
            "type": "string"
          },
          "title": "Response.headers",
          "type": "object"
        },
        "body": {
          "title": "Response.body",
          "type": "string"
        }
      },
      "required": [
        "statusCode",
        "body"
      ],
      "additionalProperties": false,
      "title": "Response",
      "type": "object"
    },
    "ErrorResponse": {
      "properties": {
        "statusCode": {
          "title": "ErrorResponse.statusCode",
          "type": "number"
        },
        "headers": {
          "additionalProperties": {
            "type": "string"
          },
          "title": "ErrorResponse.headers",
          "type": "object"
        },
        "body": {
          "title": "ErrorResponse.body",
          "type": "string"
        }
      },
      "required": [
        "statusCode",
        "body"
      ],
      "additionalProperties": false,
      "title": "ErrorResponse",
      "type": "object"
    }
  },
  "securityDefinitions": {},
  "basePath": "/dev",
  "host": "dg6etd0ogl.execute-api.eu-west-1.amazonaws.com",
  "schemes": [
    "https"
  ]
};