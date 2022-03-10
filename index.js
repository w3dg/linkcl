#!/usr/bin/env node
import meow from "meow";
import clean from "./lib/index.js";

const cli = meow(
  `
	Usage: linkcl [options] (url)

	Options
	  --clipboard, -c  Copy the clean link to your clipboard.
    --help, -h       Show this help message.
`,
  {
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
    },
  }
);

clean(cli.input, cli.flags);
