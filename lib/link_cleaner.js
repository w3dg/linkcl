import { matchesQueryParam, urls_to_param_mappers } from "./cleaning_rules.js";

function shouldRemove(p) {
  return matchesQueryParam.some((f) => f(p));
}

export default function link_cleaner(inputUrl) {
  const url = new URL(inputUrl);
  if (url.search.length > 0) {
    const params = url.searchParams;
    const new_params = new URLSearchParams(params);
    let redirect_query_param = null;
    // console.debug(new_params);
    // search for redirect params and clean that link as well.
    urls_to_param_mappers.forEach((x) => {
      if (x.urls.some((u) => u.includes(url.host))) {
        // console.debug("MATCHED", x);
        redirect_query_param = x.query_param || "url"; // default to 'url' otherwise map to query_param
        // console.debug(redirect_query_param);
      }
    });
    if (redirect_query_param) {
      const redirectedUrl = new URL(params.get(redirect_query_param));
      return redirectedUrl;
    }

    // remove all query params that match the regexp
    for (let p of params.keys()) {
      if (shouldRemove(p)) {
        new_params.delete(p);
        // console.debug("[link_cleaner][link_cleaner] nuked query param: ", p);
      }
    }

    // return url with remaining params
    url.search = new_params.toString();
    return url;
  }
  // return original url if no params
  return url;
}
