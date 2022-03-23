import chalk from "chalk";
import normalizeUrl from "normalize-url";
import clipboard from "clipboardy";

import re_weburl from "./regex.js";
import link_cleaner from "./link_cleaner.js";

function isValidURL(inputUrl) {
  const res = inputUrl.match(re_weburl) != null;
  // console.log(res);
  return res;
}

export default function clean(cli, inputArr, inputFlags) {
  const copyToClipboard = inputFlags.clipboard;

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

  const normalisedURL = normalizeUrl(inputUrl, { removeQueryParameters: false });
  const cleanUrl = link_cleaner(normalisedURL);

  // console.log(chalk.greenBright(`Normalised URL: ${normalisedURL}`));

  if (copyToClipboard) {
    clipboard.writeSync(cleanUrl.toString());
    console.log("Clean URL (copied to clipboard): ", chalk.greenBright(cleanUrl));
  } else console.log("Clean URL: ", chalk.greenBright(cleanUrl));
}
