import chalk from "chalk";

import re_weburl from "./regex.js";
import link_cleaner from "./link_cleaner.js";

function isValidURL(inputUrl) {
  // const regularExpression = "((((ht{2}ps?://)?)((w{3}\\.)?))?)[^.&&[a-zA-Z0-9]][a-zA-Z0-9.-]+[^.&&[a-zA-Z0-9]](\\.[a-zA-Z]{2,3})";
  const res = inputUrl.match(re_weburl) != null;
  // console.log(res);
  return res;
}

export default function clean(cli, inputArr, inputFlags) {
  // console.log(inputArr, inputFlags);

  // If empty args or --help flag is passed no matter what else, show help message.
  if (inputArr.length === 0 || inputFlags.help) {
    cli.showHelp();
    return;
  }

  const inputUrl = inputArr[0];

  if (!isValidURL(inputUrl)) {
    console.log(chalk.redBright("Arguments passed is not a valid URL."));
    cli.showHelp();
    return;
  }

  const cleanUrl = link_cleaner(inputUrl);
}
