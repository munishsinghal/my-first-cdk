import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class MyFirstCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'lambdaFunction', {
      functionName: 'my-first-cdk',
      handler: 'index.handler',
      code: new lambda.AssetCode('src'),
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 128
    })

  }
}
