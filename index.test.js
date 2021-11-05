const convertHexToBase64 = require('./convertHexToBase64.js');

test('Convert Hex String to Base 64', () => {
    const input = "4a1b48d7322394a78326cd283f0834093e65421a7e98e90e5b452d160b5d07d8";
    const output = "ShtI1zIjlKeDJs0oPwg0CT5lQhp+mOkOW0UtFgtdB9g=";
    expect(convertHexToBase64(input)).toEqual(output);
  });

