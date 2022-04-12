import {Duration, Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Queue} from "aws-cdk-lib/aws-sqs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PipelineManualApprovalStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // example resource
    new Queue(this, 'PipelineManualApprovalQueue', {
      visibilityTimeout: Duration.seconds(300)
    });
  }
}
