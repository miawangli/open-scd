export default ({
  plugins: ["@snowpack/plugin-typescript"],
  packageOptions : {
    external: ['@web/dev-server-core','@web/dev-server-esbuild','esbuild','crypto'],
  },
  exclude: [
    "**/*.@(spec|test).@(js|mjs)",
    "**/test/**/*",
    "**/out-tsc/**/*",
    "**/.editorconfig",
    "**/.eslintrc.cjs",
    "**/.git/**/*",
    "**/.gitignore",
    "**/.travis.yml",
    "**/package*",
    "**/tsconfig.json",
    "**/web-test-runner.config.mjs",
    "**/node_modules/**/*"
  ],  
});