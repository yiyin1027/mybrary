require('docenv').config();
const {DynamoDBClient} = require('@aws-sdk/client-dynamodb');

const config = {
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
}

const client = new DynamoDBClient(config)

module.exports = client;