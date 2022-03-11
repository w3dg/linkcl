#!/usr/bin/env node
import meow from "meow";
import clean from "./lib/index.js";

const cli = meow(
  `
  Usage: linkcl [options] (url)

  Options
    --clipboard, -c  Copy the clean link to your clipboard.
    --help, -h       Show this help message.
    --version, -v    Show the current version of linkcl.
`,
  {
    allowUnknownFlags: false, // fail and exit if unknown flags are passed
    importMeta: import.meta,
    flags: {
      clipboard: {
        type: "boolean",
        alias: "c",
      },
      help: {
        type: "boolean",
        alias: "h",
      },
      version: {
        type: "boolean",
        alias: "v",
      },
    },
  }
);

clean(cli, cli.input, cli.flags);
