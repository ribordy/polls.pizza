import replace from "@rollup/plugin-replace";
import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

require("dotenv").config();

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "styles/main.scss",
  globalScript: "src/app.ts",
  taskQueue: "async",
  plugins: [
    replace({
      exclude: "node_modules/**",
      values: {
        "process.env.STRIPE_PUBLIC_KEY": process.env.STRIPE_PUBLIC_KEY ? `"${process.env.STRIPE_PUBLIC_KEY}"` : "process.env.STRIPE_PUBLIC_KEY",
        "process.env.PIZZA_BASE_DOMAIN": process.env.PIZZA_BASE_DOMAIN ? `"${process.env.PIZZA_BASE_DOMAIN}"` : `"https://base-next.polls.pizza"`,
        "process.env.DONATION_FORM": process.env.DONATION_FORM ? `"${process.env.DONATION_FORM}"` : `"https://docs.google.com/forms/d/e/form-id/formResponse"`,
        "process.env.BUGSNAG_KEY": process.env.BUGSNAG_KEY ? `"${process.env.BUGSNAG_KEY}"` : `null`,
        "process.env.NODE_ENV": process.env.NODE_ENV ? `"${process.env.NODE_ENV}"` : `"dev"`,
      },
    }),
    sass({
      injectGlobalPaths: ["styles/include/vars.scss", "styles/include/mixins.scss"],
    }),
  ],
  outputTargets: [
    {
      type: "www",
      baseUrl: process.env.ROOT_URL,
      dir: "dist/www",
      prerenderConfig: "./prerender.config.ts",
      copy: [{ src: "../public", dest: "." }],
    },
  ],
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    safari10: true,
    shadowDomShim: true,
  },
};
