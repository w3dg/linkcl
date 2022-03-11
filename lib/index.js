import re_weburl from "./regex.js";

function isValidURL(inputUrl) {
  // const regularExpression = "((((ht{2}ps?://)?)((w{3}\\.)?))?)[^.&&[a-zA-Z0-9]][a-zA-Z0-9.-]+[^.&&[a-zA-Z0-9]](\\.[a-zA-Z]{2,3})";
  const res = inputUrl.match(re_weburl) != null;
  console.log(res);
  return res;
}

export default function clean(cli, inputArr, inputFlags) {
  console.log(inputArr, inputFlags);

  if (inputArr.length === 0 || inputFlags.help) {
    cli.showHelp();
    return;
  }

  const inputUrl = inputArr[0];

  if (!isValidURL(inputUrl)) {
    console.log("Arguments passed is not a valid URL.");
    return;
  }
}
