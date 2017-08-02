export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        BUCKET: 'tutorial-serverless-app-notas'
    },
    apiGateway: {
        URL: 'https://qjo27g1mod.execute-api.eu-west-2.amazonaws.com/prod',
        REGION: 'eu-west-2',
    },
    cognito: {
        USER_POOL_ID : 'eu-west-2_FKaURmICB',
        APP_CLIENT_ID : '672ua5kc990aiorabc68fdktug',
        REGION: 'eu-west-2',
        IDENTITY_POOL_ID: 'eu-west-2:78a7095d-9e43-4575-9614-282aa1c653c2',
    }

};