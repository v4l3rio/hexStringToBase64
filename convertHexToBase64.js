/**
 * Function that allows the conversion of a Hex string to base64
 * @param {string} inputString - Hex string to convert to base64
 * @returns Base64 String
 */
 function convertHexToBase64(inputString){
    return Buffer.from(inputString, 'hex').toString('base64');
}

module.exports = convertHexToBase64;