const convertHexToBase64 = require('./convertHexToBase64.js');

if (process.argv[2]){
    console.log(convertHexToBase64(process.argv[2]));
}
else {
    console.log("Please run with hex string as argument");
}



