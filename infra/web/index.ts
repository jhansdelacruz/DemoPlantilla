import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws"

const config = new pulumi.Config();
const env = config.require("env");
const bucketWeb = config.require("bucketWeb");

const bucket = new aws.s3.Bucket(`${env}-web-statica`, {
  bucket: `${bucketWeb}`
});

export { bucket }
