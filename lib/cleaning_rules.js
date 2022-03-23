// https://github.com/apiraino/link_cleaner/master/cleaning_rules.js
// query params matching used in link_cleaner()

const f_match_utm = (p) => p.toString().startsWith("utm_");
const f_match_all = (p) => true;
const f_match_fbclid = (p) => p == "fbclid";
const f_match_igshid = (p) => p == "igshid";
const f_match_fbcontent = (p) => p == "efg";

const matchesQueryParam = [f_match_utm, f_match_all, f_match_fbclid, f_match_igshid, f_match_fbcontent];

export { matchesQueryParam };

// When param_name is missing, 'param_name=url' is implied
export const urls_to_param_mappers = [
  {
    urls: ["*://l.facebook.com/*", "*://lm.facebook.com/*"],
    query_param: "u",
  },
  {
    urls: ["*://out.reddit.com/*"],
  },
  {
    urls: ["*://steamcommunity.com/linkfilter/*"],
  },
  {
    urls: ["*://l.instagram.com/*"],
    query_param: "u",
  },
  {
    urls: ["*://t.umblr.com/*"],
    query_param: "z",
  },
  {
    urls: ["*://sys.4chan.org/derefer?*"],
  },
  {
    urls: ["*://www.youtube.com/redirect?*"],
    query_param: "q",
  },
  {
    urls: ["*://slack-redir.net/link*"],
  },
  {
    urls: ["*://x.chip.de/linktrack/button/*"],
  },
  {
    urls: ["*://getpocket.com/redirect*", "*://www.getpocket.com/redirect*"],
  },
  {
    urls: ["*://t.mailpgn.com/l/*"],
    query_param: "fl",
  },
  {
    urls: ["*://*.mailchimp.com/mctx/clicks*"],
  },
  // Leads to infinite redirect loop
  // {
  //     urls: ["*://medium.com/m/global-identity*"],
  //     query_param: 'redirectUrl'
  // },
  {
    urls: ["*://*.recruitics.com/redirect*"],
    query_param: "rx_url",
  },
];
