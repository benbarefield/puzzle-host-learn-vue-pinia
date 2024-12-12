const {cp, copyFile} = require("node:fs/promises");
const path = require('node:path');
const packageUpdater = require('puzzle-host-package-updater');

(async () => {
  await packageUpdater(path.resolve(__dirname, "./package.json"), path.resolve(__dirname, "../../package.json"));

  await cp(path.resolve(__dirname, "./src"), path.resolve(__dirname, "../../src"), { recursive: true });
  await copyFile(path.resolve(__dirname, "./index.html"), path.resolve(__dirname, "../../index.html"));
  await copyFile(path.resolve(__dirname, "./README.md"), path.resolve(__dirname, "../../README.md"));
  await copyFile(path.resolve(__dirname, "./.env.local"), path.resolve(__dirname, "../../.env.local"));
  await copyFile(path.resolve(__dirname, "./tsconfig.app.json"), path.resolve(__dirname, "../../tsconfig.app.json"));
  await copyFile(path.resolve(__dirname, "./tsconfig.json"), path.resolve(__dirname, "../../tsconfig.json"));
  await copyFile(path.resolve(__dirname, "./tsconfig.node.json"), path.resolve(__dirname, "../../tsconfig.node.json"));
  await copyFile(path.resolve(__dirname, "./tsconfig.vitest.json"), path.resolve(__dirname, "../../tsconfig.vitest.json"));
  await copyFile(path.resolve(__dirname, "./vite.config.ts"), path.resolve(__dirname, "../../vite.config.ts"));
  await copyFile(path.resolve(__dirname, "./vitest.config.ts"), path.resolve(__dirname, "../../vitest.config.ts"));
})();
