// declare function require(moduleName: string): any;

import { ZipCodeValidator as Zip } from "./ZipCodeValidator";
let needZipValidation:boolean = true;
if (needZipValidation) {
  let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
  let validator = new ZipCodeValidator();
  if (validator.isAcceptable("...")) {
    /* ... */
  }
}
