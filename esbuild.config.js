const path = require('path');
const sass = require('esbuild-sass-plugin');
const pcss = require('postcss');
const af   = require('autoprefixer');

require("esbuild").build({
  entryPoints: ["application.ts"],
  entryNames: "client_application",
  bundle: true,
  watch: true,
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  watch: true,
  // custom plugins will be inserted is this array
  plugins: [
    sass.sassPlugin({
        async transform(source) {
            const { css } = await pcss([af]).process(source);
            return css;
        },
    }),
  ],
}).catch(() => process.exit(1));
