"use strict";
// declare function require(moduleName: string): any;
exports.__esModule = true;
var needZipValidation = true;
if (needZipValidation) {
    var ZipCodeValidator = require("./ZipCodeValidator");
    var validator = new ZipCodeValidator();
    if (validator.isAcceptable("...")) {
        /* ... */
    }
}
