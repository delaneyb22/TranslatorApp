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
