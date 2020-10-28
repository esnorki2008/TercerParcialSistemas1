import { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
    UserPoolId: 'us-east-1_yqor6FrlP',
    ClientId: '7ioo7gsh5j8beej5v7a4scq13t'
};

export default new CognitoUserPool(poolData);