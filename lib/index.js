import help from "./help.js";
import { validOpts } from "../constants.js";

const isValidOpt = (opt) => validOpts.indexOf(opt) >= 0;

export default function clean(inputArr, inputFlags) {
  console.log(inputArr, inputFlags);
  const inputFlagsArr = Object.keys(inputFlags);

  const hasInvalidFlag = !inputFlagsArr.every(isValidOpt);

  if (hasInvalidFlag) {
    console.log("Invalid Flag detected");
    help();
  }
}

function localFunction() {
  console.log("LOCAL FUNCTION");
}
