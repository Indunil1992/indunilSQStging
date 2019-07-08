let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = function (event, context, callback) {



    sqs.sendMessage({
        MessageBody: 'testtt',
        QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/KTestSQS`,
        DelaySeconds: '0',
        MessageAttributes: {
            "x": {
                "DataType": "String",
                "StringValue": "a"
            },
            "sa": {
                "DataType": "Number",
                "StringValue": "1"
            }
        }
    }, function (data) {
        console.log("No messages");
        console.log(data);
        // your logic (logging etc) to handle successful message delivery, should be here
    }, function (error) {
        // your logic (logging etc) to handle failures, should be here
        console.log("error");
        console.log(data);
    });



    callback(null, { "message": "Successfully executed" });
}