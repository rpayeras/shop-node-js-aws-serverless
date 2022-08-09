import "dotenv/config";

import type { AWS } from "@serverless/typescript";

import basicAuthorizer from "@functions/basicAuthorizer/index";

const serverlessConfiguration: AWS = {
  service: "authorization-service",
  frameworkVersion: "3",
  plugins: [
    "serverless-esbuild",
    "serverless-auto-swagger",
    "serverless-dotenv-plugin",
    "serverless-offline",
  ],
  package: { individually: true },
  useDotenv: true,
  provider: {
    name: "aws",
    runtime: "nodejs16.x",
    architecture: "arm64",
    region: "eu-west-1",
    memorySize: 512,
    stage: "dev",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  functions: {
    basicAuthorizer,
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: false,
      exclude: ["aws-sdk"],
      target: "node16",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    // autoswagger: {
    //   title: "Shop Node Js Aws Serverless",
    //   basePath: "/dev",
    //   host: "dg6etd0ogl.execute-api.eu-west-1.amazonaws.com",
    //   schemes: ["https"],
    // },
    serverlessOffline: {
      httpPort: 3002,
    },
  },
};

module.exports = serverlessConfiguration;
