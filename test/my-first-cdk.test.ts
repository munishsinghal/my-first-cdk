import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as MyFirstCdk from '../lib/my-first-cdk-stack';
import { Handler } from 'aws-cdk-lib/aws-lambda';
import { memoryUsage } from 'process';
import * as lambda from 'aws-cdk-lib/aws-lambda';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/my-first-cdk-stack.ts
test('SQS Queue Created', () => {
    const app = new cdk.App();
    const stack = new MyFirstCdk.MyFirstCdkStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::SQS::Queue', {
        FunctionName: 'my-first-cdk',
        Runtime: lambda.Runtime.NODEJS_20_X,
        Handler: 'index.handler',
        memoryUsage: 128
    });
});
