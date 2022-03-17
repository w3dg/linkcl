import { matchesQueryParam } from "./cleaning_rules.js";

function shouldRemove(p) {
  return matchesQueryParam.some((f) => f(p));
}

export default function link_cleaner(inputUrl) {
  // console.log("LINK CLEANER", inputUrl);

  const url = new URL(inputUrl);
  if (url.search.length > 0) {
    var params = url.searchParams;
    var new_params = new URLSearchParams(params);

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
