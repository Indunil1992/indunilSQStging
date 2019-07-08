let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = function (event, context, callback) {




    sqs.receiveMessage({
        QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/Hiru1T`,
        AttributeNames: ['SequenceNumber'],
        MaxNumberOfMessages: '10',
        VisibilityTimeout: '10',
        WaitTimeSeconds: '30',
        MessageAttributeNames: ['jaya', 'sri']
    }).promise()
        .then(receivedMsgData => {
            if (!!(receivedMsgData) && !!(receivedMsgData.Messages)) {
                let receivedMessages = receivedMsgData.Messages;
                receivedMessages.forEach(message => {
                    // your logic to access each message through out the loop. Each message is available under variable message 
                    // within this block
                });
            } else {
                // No messages to process
                console.log("success" + { data });
                callback(null, "Successfully executed to enduser data" + { data });

            }
        })
        .catch(err => {
            // error handling goes here

            console.log("error " + { err });
            callback(null, "Successfully executed to enduser catch" + { err });
        });



    callback(null, { "message": "Successfully executed" });
}