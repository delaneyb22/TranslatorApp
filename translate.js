const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate();

async function translateText(text, target) {
    try {
       const [translation] = await translate.translate(text, target);
       console.log(`Text: ${text}`);
       console.log(`Translation: ${translation}`);
       return translation;
    } catch (error) {
       console.error('Translation error:', error);
    }
}

const text = 'Hello, World!';
const target = 'es'; // Target language: Spanish

translateText(text, target);

const { google } = require('googleapis');

// Use the path to the downloaded JSON key file
const keyFilePath = '/delaneybaker/downloads/coral-bucksaw-404818-08a184e3400f.json';

// Load the key file
const keyFile = require(keyFilePath);

// Authenticate with the service account
const jwtClient = new google.auth.JWT(
    keyFile.client_email,
    null,
    keyFile.private_key,
    ['https://www.googleapis.com/auth/devstorage.read_write'], // Specify the necessary scopes
    null
   );

// Use the JWT client to authenticate with the APIs
jwtClient.authorize((err, tokens) => {
 if (err) {
    console.log('Error:', err);
    return;
 }
 console.log('Successfully authenticated with the Google Cloud APIs');
});
