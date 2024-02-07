import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";
import {importAssets} from "svelte-preprocess-import-assets"

const dev = "production" === "development";

const config = {
  preprocess: [preprocess(), importAssets()],
  kit: {
    adapter: adapter(),
  },
};

export default config;
